# GitHub 多账户管理及匿名邮箱

- HTTPS 模式可区分多用户。
- commit 记录中显示的用户由 `git config` 的 `user.email` 决定，不受验证仓库 GitHub 账户限制。
- 在 GitHub 的 `Settings > Emails` 中勾选 `Keep my email addresses private` 可发行 GitHub 匿名邮箱。
  - 在 `git config` 设置匿名邮箱即可关联 GitHub 账户。
  - 使用不正确的邮箱将无法关联 GitHub 账户。

## 以多个 SSH 的方式使用多个 GitHub 账户

### 1. 生成 SSH Key

```bash
ssh-keygen -t ed25519 -C 'some message and email'
```

### 2. 把公钥加到 GitHub

```bash
cat ~/.ssh/id_ed25519.pub | clip
```

### 编辑 SSH config 文件以适配不同账号

```config ~/.ssh/config
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519

Host github-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_work
```
