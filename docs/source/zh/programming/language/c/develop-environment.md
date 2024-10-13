# C 语言开发环境（Windows）

## C 语言标准库及编译器

Visual Studio Build Tools \<YEAR\>

安装完后会以 Visual Studio Installer 的形式存在于计算机中。

## Neovim 中的 LSP / Formatter / Highlight

| 种类      | 名称         | 安装方式        | 调用者          |
| --------- | ------------ | --------------- | --------------- |
| LSP       | clangd       | mason.nvim      | nvim-lspconfig  |
| Formatter | clang-format | mason.nvim      | conform.nvim    |
| Highlight | c            | nvim-treesitter | nvim-treesitter |

## 编译 C 文件

1. 打开 Visual Studio Build Tools 提供的以下两种 shell 的其中一个：

   - Developer Command Prompt for VS \<YEAR\>
   - Developer PowerShell for VS \<YEAR\>

2. 调用 `cl` 命令编译 C 文件为可执行文件。
