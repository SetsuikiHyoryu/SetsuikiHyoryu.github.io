# 使用 `git bundle` 脱机复刻提交历史

## 应用场景

客户担心开发中泄露商业机密，希望在使用 Git 进行多人开发时处于脱机的条件下而不是通过
互联网远程仓库。此时可以用 Git 的 bundle 功能保持各副本之间提交历史一致。

## 创建 bundle 文件

```bash
# alpha.bundle: 可自定义的 bundle 文件名。
# main: 需要打包的 git 对象。
git bundle create alpha.bundle main
```

## 验证 bundle 文件的有效性

```bash
git bundle verify alpha.bundle
```

## 使用 bundle 文件

```bash
# bundle 文件充当了远程仓库的角色，但无法使用 push 来更新 bundle 文件。
git pull alpha.bundle main
```
