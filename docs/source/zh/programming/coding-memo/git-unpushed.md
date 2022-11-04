# git 原生命令查看未上传提交记录

## 查看本地分支下所有不包含远程历史的记录

```shell
git log --branches --not --remotes
```

## 查看指定远程分支和指定本地分支的历史记录差异

```shell
git log origin/main.. # Default HEAD
git log origin/main..HEAD
git log origin/main..main
```

## 查看上游分支和指定本地分支的历史记录差异

```shell
# powershell 需要加引号
git log '@{upstream}..' # Default HEAD
git log '@{u}..HEAD' # upstream 可简写为 u
git log '@{u}..main'
```
