# 使用 Docker 容器创建 linux 服务器（因为整个流程坑太多，目前冻结中）

## 1. 安装 linux 发行版镜像

以 ubuntu 为例，[docker hub](https://hub.docker.com/_/ubuntu) 页面的右上方提到了 `docker pull ubuntu`（默认即为 `latest`） 下载镜像。

## 2. 运行容器

[docker CLI reference](https://docs.docker.com/reference/cli/docker/)

### 2.1. 创建容器

```sh
# Powershell 中的换行符是「`」不是「\」
docker create \
  --name virtual-server \
  --publish 9922:22 \
  --publish 9780:80 \
  --tty ubuntu
```

- `--tty` 创建伪终端，不在 `create` 时指定这个，下次运行容器会直接运行到终止。

### 2.2. 启动容器

```sh
docker start virtual-server
```

### 2.3. 进入容器

```sh
docker exec --interactive --tty virtual-server /bin/bash
```

- `--interactive` 使用标准输入交互式地访问容器，不指定这个参数就会无法从命令行干涉。
- `--tty` 创建伪终端，不指定这个参数就没办法执行 shell。
- `/bin/bash` 就是要在容器内执行的命令。

### 2.4. 以上三者可用 `docker run` 一并执行

```sh
# Powershell 中的换行符是「`」不是「\」
docker run \
  --name virtual-server \
  --publish 9922:22 \
  --publish 9780:80  \
  -it ubuntu /bin/bash
```

## 3. 安装服务器所需最少程序

```sh
# 更新 apt-get
apt-get update
apt-get install --yes openssh-server nginx neovim curl
```

## 4. 启动 ssh

```sh
service ssh start
```

## 5. 安装数据库（以 PostgreSQL 为例）

下载数据库 \
`apt install postgresql` \
See: <https://www.postgresql.org/download/linux/ubuntu/>

设置数据库目录到环境变量 \
`export PGDATA=/sample/data`

创建普通用户（PostgreSQL 部分命令不能使用 root 用户执行） \
`useradd -d /home/username -m username`

修改数据库目录访问权限 \
`chown username:username /sample/data`

初始化数据库 \
`initdb` \
可能不在环境变量里，postgres 的 bin 目录为 `/usr/lib/postgres/<version>/bin`

启动数据库服务 \
`pg_ctl start` \
可能不在环境变量里，postgres 的 bin 目录为 `/usr/lib/postgres/<version>/bin` \
这个过程中可能还需要 `/var/run/postgresql` 的权限。

访问数据库 \
`psql -d postgres`
