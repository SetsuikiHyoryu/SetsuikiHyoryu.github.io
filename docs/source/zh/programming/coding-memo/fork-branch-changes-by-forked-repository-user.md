# 由被 fork 的仓库的用户修改 fork 分支

## 1. 添加 fork 者的仓库

```sh
git remote add <name> <url>
```

例：

```sh
git remote add suzuran https://github.com/username/sample.git
```

## 2. 检查远程分支列表

```sh
git branch --remote
```

结果例：

```sh
origin/main
suzuran/example # fork 分支
```

## 3. 基于 fork 分支创建本地分支

```sh
git switch --create <new-branch> [<start-point>]
```

例：

```sh
git switch --create temp suzuran/example
```

在这一步之后即可在本地对 fork 分支进行测试和修改。

## 4. 上传修改至 fork 分支

```sh
git push <repository> [<refspec>]
```

例：

```sh
git push suzuran temp:example
```
