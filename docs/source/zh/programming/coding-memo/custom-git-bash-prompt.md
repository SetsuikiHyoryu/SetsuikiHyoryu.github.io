# 自定义 Git Bash 命令行提示符（Prompt）

※ 本文是基于 Windows 系统的，其他系统中本文所提及的文件的位置可能不一样。

## 相关文档

- Bash Shell 官方文档：[Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html)
- 命令行提示符中显示 Git 信息（文中的函数调用语法已过时，正确语法见下文「注意点」章节）：[A1.7 附录 A: 在其它环境中使用 Git - Bash 中的 Git](https://git-scm.com/book/zh/v2/%E9%99%84%E5%BD%95-A%3A-%E5%9C%A8%E5%85%B6%E5%AE%83%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8-Git-Bash-%E4%B8%AD%E7%9A%84-Git)

## 操作流程

1. 在 Git 的安装目录下使用 `prompt` 关键字搜索找到默认的命令行提示符配置文件。

   - `<git-root>\etc\profile.d\git-prompt.sh`（具有可直接参考命令行提示符写法的代码和说明它的注释）。
   - `<git-root>mingw64\share\git\completion\git-prompt.sh`（具有 Git 信息显示内容的常量配置的相关说明）。

2. 在用户目录 `C:\Users\<Username>` 下创建 Bash shell 的配置文件 `.bashrc`，参考第一步中找出的文件自定义命令行提示符。
   - 在命令行提示符中显示 Git 信息需要导入 `<git-root>mingw64\share\git\completion\git-prompt.sh` 与 `<git-root>mingw64\share\git\completion\git-completion.sh`，并调用其中的 `__git_ps1` 函数（正确调用语法见下文「注意点」章节）。

## 注意点

命令行提示符最终由 `PS1` 的形状决定，并通过 `MSYS2_PS1="$PS1"` 赋值语句生效。

### 赋值

赋值符号 '=' 左右不可有空格，有了会报错。

### 字符串

`""` 内可使用模版字符串，被 `$` 标记的文字被视为变量名，没有被标记的被视为普通文字。`''` 内不可使用模版字符串。字符串拼接通过两个字符直接排列在一起实现。

### 函数

#### 定义语法

```bash
function_name() {}
```

- 如果要在配置文件中拿到函数的运算结果，不可使用 `return` 而到使用 `echo`。
- 函数参数不是在括号中定义，而是直接在函数体内使用 `$1`、`$2` 等占位符。

#### 调用语法

```bash
# 字符串外
green=$(set_text_color "32")

# 字符串内
# `""` 内为传入的参数，此处的 `[]` 是要显示的普通文字。
PS1='`__git_ps1 "[%s]"`\n'
```

### 样式

- 样式由 `'\[\033[32m\]'` 这个格式的字符串来控制。
- `\033` 与 `\e` (escape) 同义。
- `32` 为 ASNI 颜色编号。
- 默认仅可使用少量颜色，采用 256 色的语法 `"\[\e[38;5;32m\]"`，`38` 意为前景，`5` 意为使用 256 色。
- 这个问答 「[What color codes can I use in my Bash PS1 prompt?](https://unix.stackexchange.com/questions/124407/what-color-codes-can-i-use-in-my-bash-ps1-prompt)」可查看颜色编号。
