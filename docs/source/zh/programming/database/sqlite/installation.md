# 安装 SQLite

## 进入官网的下载页

1. 在搜索引擎检索 SQLite 找到官网。
2. 进入后在导航栏中找到「[Download](https://sqlite.org/download.html)」标签。

## 挑选下载文件

SQLite 官方提供了源码和预编译二进制文件两种程序文件，源码需要用户自己编译，预编译文件则可以直接被程序或命令行调用。

这里以 Windows 版本的预编译二进制文件为例：

| Precompiled Binaries for Windows | 简述             | 说明                                                               |
| -------------------------------- | ---------------- | ------------------------------------------------------------------ |
| sqlite-dll-win-x86-xxxxxxx.zip   | 32-bit DLL (x86) | DLL 不能直接运行，但可以被程序调用。                               |
| sqlite-dll-win-x64-xxxxxxx.zip   | 64-bit DLL (x64) | DLL 不能直接运行，但可以被程序调用。                               |
| sqlite-tools-win-x64-xxxxxxx.zip | 64-bit EXE       | 包含可以直接在命令行中执行的 shell 程序，其中包含了上述 DLL 文件。 |

## 下载 SQLite

1. 点击下载页面上对应 OS 标题下的 ZIP 文件名以下载文件。保存至准备好的 SQLite 放置路径。
2. 解压 ZIP，确认解压出来的文件夹中包含 DLL/EXE 文件。
   - 我这里下载的是「sqlite-tools-win-x64-3460000.zip」，其中包含以下三个文件：
     - sqldiff.exe - 用来比较两个 SQLite 数据库文件之间的差异。
     - sqlite3.exe - 命令行 shell 工具，用来操作 SQLite 数据库文件。
     - sqlite3_analyzer.exe - 用来分析 SQLite 数据库文件，提供统计信息和分析报告。
3. 向环境变量「Path」添加 SQLite 预编译源文件所在的目录。
   - 使用「Win + R」打开运行对话框输入「SystemPropertiesAdvanced」回车后可快速打开系统属性窗口，右下角有环境变量按钮。

## 尝试创建一个数据库

首先，使用命令行工具进入想存放数据库的目录。

其次，执行以下命令创建学生数据库：

```shell
sqlite3 students.db
```

执行完成后会进入 SQLite 命令行界面：

```shell
❯ sqlite3 students.db
SQLite version 3.46.0 2024-05-23 13:25:27 (UTF-16 console I/O)
Enter ".help" for usage hints.
sqlite>
```

使用 `.shell dir` 命令确认当前目录下已经成功创建数据库文件：

```shell
sqlite> .shell dir
 E:\workspace のディレクトリ

2024/06/21  03:22    <DIR>          .
2024/06/21  02:03    <DIR>          ..
2024/06/21  03:22             8,192 students.db
```

一些好用的 SQLite 命令：

| 命令               | 说明                                                          |
| ------------------ | ------------------------------------------------------------- |
| .help              | 查看帮助。                                                    |
| .shell CMD ARGS... | 执行 windows CMD 命令。比如可以执行 `.shell cls` 来清空屏幕。 |
| .header on         | 默认为 off，此时打印表格不会显示列名。显示列名需要设置为 on。 |
| .mode column       | 默认打印表格时不会对齐，这样设置后打印表格将更容易查看。      |
| .databases         | 打印数据库                                                    |
| .tables            | 打印表格                                                      |

SQLite 官方语法文档：[SQL As Understood By SQLite](https://sqlite.org/lang.html)

创建一个学生表格：

```sql
-- 创建后使用 `.schema students` 就可以查看表定义。
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    height NUMERIC NOT NULL
);
```

插入学生：

```sql
-- `id` 为自增字段，所以插入时不用指定。
INSERT INTO students (name, height)
VALUES ('小鳥遊ホシノ', 145),
    ('下江コハル', 148),
    ('浅黄ムツキ', 144),
    ('霞沢ミユ', 149);
```

查询学生表中的所有学生：

```sql
SELECT * FROM students;
```
