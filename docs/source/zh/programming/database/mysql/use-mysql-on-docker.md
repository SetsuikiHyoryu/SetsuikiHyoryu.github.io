# 在 Docker 上使用 MySQL

## 参考视频

[Docker で MySQL の最小構成を構築します。データ永続化設定もあり](https://www.youtube.com/watch?v=0qNTbkFfR4U)

## 1. 在主机建立保存数据库的目录

|目录|说明|
|:-|:-|
|mysql|根目录|
|mysql/data|数据库保存文件夹|

## 2. 创建 docker-compose.yml 文件

```yaml
# mysql/docker-compose.yml
version: "3.9"

services:
  mysql:
    image: mysql:8.0.31
    container_name: mysql_db
    port:
      - 3306:3306
      - 33060:33060
    environment:
      # Need to set password for root user.
      - MYSQL_ROOT_PASSWORD=password
      # Time zone.
      - TZ=Asia/Tokyo
    # 使用卷映射本地目录以保存数据
    volumes:
      - ./data:/var/lib/mysql
```

## 3. 在 docker 中启动服务

```shell
# 编译服务
docker-compose build
# 启动容器 --detach, -d: Run containers in the background.
docker-compose up --detach
# 查询容器状态
docker-compose ps
# 查看容器输出日志 --follow, -f: Follow log outpu.
docker-compose logs --follow mongo
# 停止容器
docker-compose stop
# 停止容器并删除容器及网络
docker-compose down
# 停止容器并删除容器、网络、镜像
docker-compose down --rmi all
```

## 4. 在容器中访问 Mysql

```shell
# Mysql is server name in `docker-compose.yml`.
docker exec -it mysql bash
```

then

```bash
mysql -u root -ppassword
```

## 5. 使用 golang 连接数据库

<https://github.com/go-sql-driver/mysql>

### 5.1. 安装 mysql 驱动

```shell
# 下载下的包在 $GOPATH 中
go get -u github.com/go-sql-driver/mysql
```

### 5.2. 编写程序

```go
// mysql/testing-app/app.go

package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	fmt.Println("Drivers:", sql.Drivers())

	database := connectToDatabase()
	defer database.Close()

	// 查询复数行
	queryMultiUser(database)
	// 查询一行。若有复数行适配条件，则取第一行
	queryOneUser(database)

	// 插入数据
	insertRows(database)
}

func connectToDatabase() *sql.DB {
	database, exception := sql.Open("mysql", "root:password@tcp(localhost:3306)/sample")

	if exception != nil {
		log.Fatal("Unable to open connection to db.")
	}

	return database
}

func queryMultiUser(database *sql.DB) {
	results, exception := database.Query("select * from user_info")

	if exception != nil {
		log.Fatal("Error when fetching product table rows:", exception)
	}

	defer results.Close()

	for results.Next() {
		var (
			id   int
			name string
		)

		exception = results.Scan(&id, &name)

		if exception != nil {
			log.Fatal("Unable to parse row:", exception)
		}

		fmt.Printf("One of many, ID: %d, Name: '%s'\n", id, name)
	}
}

func queryOneUser(database *sql.DB) {
	var (
		id   int
		name string
	)

	exception := database.QueryRow("Select * from user_info where id = 1").Scan(&id, &name)

	if exception != nil {
		log.Fatal("Unable to parse row:", exception)
	}

	fmt.Printf("Only one row, ID: %d, Name: '%s'\n", id, name)
}

type userStruct struct {
	id   int
	name string
}

func insertRows(database *sql.DB) {
	users := []userStruct{
		{2, "Shamare"},
		{3, "Suzuran"},
	}

	statement, exception := database.Prepare("INSERT INTO user_info (id, name) VALUES (?, ?)")

	if exception != nil {
		log.Fatal("Unable to prepare statement:", exception)
	}

	defer statement.Close()

	for _, user := range users {
		_, exception = statement.Exec(user.id, user.name)

		if exception != nil {
			log.Fatal("Unable to prepare statement:", exception)
		}
	}
}

```
