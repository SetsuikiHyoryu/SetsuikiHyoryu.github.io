# Neovim 全局替换

## 工作流

1. 全局检索待替换的关键字并创建待替换的文件的列表。
2. 使用替换命令进行全局替换并使用更新命令全局保存修改。

## 全局检索并创建文件列表

可以选择[《参数列表》（`:help argument-list`）](https://neovim.io/doc/user/editing.html#arglist)或[《快速修复列表》(`:help quickfix`)](https://neovim.io/doc/user/quickfix.html#Quickfix)。

### 创建参数列表

将指定的文件放入参数列表 `help :args`：

```sh
:args *.md
```

在控制台打印当前参数列表：

```sh
:args
```

### 创建快速修复列表

将包含指定字符或正则的文件放入错误列表（快速修复列表）：

```sh
:vimgrep before *.md
```

打开快速修复列表：

```sh
:copen
```

## 全局替换并保存修改

### 在参数列表中全局替换

```sh
:argdo %s/before/after/gc | update
```

- `%`: 整个文件（`help :%`）。
- `s`: 替换命令（`help :substitute`）。
- `before`: 要被替换的单词。
- `after`: 替换用的单词。
- `g`: 替换每一行内所有匹配到的（`help :s_g`）。
- `c`: 交互式确认每个替换（`help :s_c`）。
- `|`: 命令分割符，用于在一行内写多个命令（`help :bar`）。
- `update`: 当 buffer 被修改时写入文件（`help :update`）。

### 在快速修复列表中全局替换

```sh
:cfdo %s/before/after/gc | update
```

参数的说明见[在参数列表中全局替换](#在参数列表中全局替换)。
