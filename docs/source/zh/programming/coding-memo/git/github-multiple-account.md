# GitHub 多账户管理及匿名邮箱

- HTTPS 模式可区分多用户。
- commit 记录中显示的用户由 `git config` 的 `user.email` 决定，不受验证仓库 GitHub 账户限制。
- 在 GitHub 的 `Settings > Emails` 中勾选 `Keep my email addresses private` 可发行 GitHub 匿名邮箱。
  - 在 `git config` 设置匿名邮箱即可关联 GitHub 账户。
  - 使用不正确的邮箱将无法关联 GitHub 账户。
