# `git log` / `git show`

## `--pretty[=<format>]` / `--format=<format>`

\<format\> 可以是 _oneline_, _short_, _medium_, _full_, _fuller_, _reference_, _email_, _raw_, _format:\<string\>_, _tformat:\<string\>_ 之一。
每个参数分别是什么形状可以参考 [Git - pretty-formats Documentation](https://git-scm.com/docs/pretty-formats)。

### `--oneline`

是 `--pretty=oneline --abbrev-commit` 的简写，`--abbrev-commit` 是用于缩短显示的哈希值。

## 【Patch】（补丁，代码的改动集）

### `--patch`

`git show` 默认调用 `--patch`，不要【Patch】部分可以 `--no-patch`。

```bash
diff --git a/docs/source/zh/programming/coding-memo/neovim/neovim-help-document-detail.md b/docs/source/zh/programming/coding-memo/neovim/neovim-help-document-detail.md
index 7de21d3..365c8cb 100644
--- a/docs/source/zh/programming/coding-memo/neovim/neovim-help-document-detail.md
+++ b/docs/source/zh/programming/coding-memo/neovim/neovim-help-document-detail.md
@@ -47,3 +47,23 @@
 - `:write >> file`: 将当前文件（或选中区域）以 append 的方式写入指定文件。
 - `:saveas file`: 将当前缓冲区保存为新文件并打开它。
 - `:file file`: 修改当前缓冲区文件名。
+
+### usr_08.txt Splitting windows

# 此处我手劫省略了若干行 +
```

### `--stat`

```bash
 .../neovim/neovim-help-document-detail.md            | 20 ++++++++++++++++++++
 1 file changed, 20 insertions(+)
```

### `--numstat`

```bash
20      0       docs/source/zh/programming/coding-memo/neovim/neovim-help-document-detail.md
```

### `--shortstat`

```bash
 1 file changed, 20 insertions(+)
```

## 【Limiting】（限制，筛选）

数量较多但都是望文生义的，建议直接参考 [Git - git-log Documentation 中的 Commit Limiting 章节](https://git-scm.com/docs/git-log#_commit_limiting)。

这里列举一些我常用的：

### `-<number>`

限制显示的条数。

### `--since=<date>`

自某日之后。允许的日期格式很多，诸如 `1818/05/05`，`yesterday`。

### `--until=<date>`

在某日之前。

### `--author=<pattern>`

匹配正则表达式的 Commit 作者。

### `--grep=<pattern>`

匹配正则表达式的 Commit 信息。
