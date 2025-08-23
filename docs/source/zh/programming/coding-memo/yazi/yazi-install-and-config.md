# Yazi 的安装及配置

[Yazi 官方文档](https://yazi-rs.github.io/docs/installation)（内容较多，建议本文看完后再跳转查看）。

## 安装

- MacOS: [Homebrew](https://yazi-rs.github.io/docs/installation#homebrew)
- Windows: [WinGet & Scoop](https://yazi-rs.github.io/docs/installation#windows)（建议看完下一段再跳转过去看）

### Windows 下安装时的注意点

[resvg]: https://github.com/linebender/resvg

我是用 WinGet 方式安装 Yazi 和其依赖的。  
但是 [resvg][resvg] 未被 WinGet 收录，所以我又用 Scoop 单独安装了 [resvg][resvg]。

此外，Yazi 检测文件的 MIME 类型需要依赖 Unix 环境下的 `file` 命令。  
Windows 下最好借助 Git 提供的 Unix 环境（MSYS2）下的 `file` 命令。  
如果不配置这个，无法正常预览图片。

做法是向 OS 配置 Yazi 的环境变量 `YAZI_FILE_ONE`，  
然后指向 Git 的 `file.exe` 文件的地址：

```PowerShell
# 也可以 GUI 操作。
[system.Environment]::SetEnvironmentVariable(
  'YAZI_FILE_ONE',
  '<Git_Installed_Directory>\usr\bin\file.exe',
  'Machine' #  `Machine`（系统级） 或者 `User`（用户级）
)
```

## 配置自定义 Shell 函数

安装后已经可以正常使用了，但是在 Yazi 的界面中不管怎么移动当前的目录位置，  
在退出 Yazi 时 Shell 必然仍处于进入前的目录。

Yazi 的作者给出了几种不同的 Shell 下自定义 Shell 函数的方式，  
以便在 Yazi 内移动目录位置后，退出后 Shell 也进入当前位置：

<https://yazi-rs.github.io/docs/quick-start#shell-wrapper>

## Yazi 本体的配置文件

[这](https://yazi-rs.github.io/docs/configuration/overview)是配置文件的章节（建议看完当前段落后再跳转查看文档）。

配置文件的目录（如果不存在，新建即可）：

- Unix: `~/.config/yazi/`.
- Windows: `%AppData%\yazi\config\`.

Yazi 本体的配置文件为以下三个：

- [yazi.toml](https://yazi-rs.github.io/docs/configuration/yazi): 常规配置（比如修改打开文件的工具）。
- [keymap.toml](https://yazi-rs.github.io/docs/configuration/keymap): 按键绑定配置。
- [theme.toml](https://yazi-rs.github.io/docs/configuration/theme): 主题样式配置。

配置文件的预设在[这里](https://github.com/sxyazi/yazi/tree/main/yazi-config/preset)，  
不需要复刻一份，只在用户的配置文件中修改想改的字段即可。  
注意预设文件的命名和用户的不一样，用户必须采用上文列出的命名。

配置文件中包含众多 Yazi 术语，可在[这里](https://yazi-rs.github.io/docs/term)查看含义，  
对搞明白修改什么字段可以达成目的有极大帮助。

## Yazi 的插件

Yazi 提供了一包管理器 `ya pkg`（`ya` 命令下的 `pkg` 子命令），  
用法和 NPM 很接近：

```bash
> ya pkg --help
Manage packages

Usage: ya.exe pkg <COMMAND>

Commands:
  add      Add packages
  delete   Delete packages
  install  Install all packages
  list     List all packages
  upgrade  Upgrade all packages
  help     Print this message or the help of the given subcommand(s)

Options:
  -h, --help  Print help
```

插件默认安装位置：

- Unix: `~/.config/yazi/plugins`.
- Windows: `%AppData%\yazi\config\plugins\`.

主题默认安装位置（和插件安装方式一致）：

- Unix: `~/.config/yazi/flavors/`.
- Windows: `%AppData%\yazi\config\flavors\`.

配置插件：

通常需要在 Yazi 配置文件根目录创建 `init.lua` 文件，  
用与 Neovim 的配置近似的方式执行 `setup`。  
具体要写什么在配件自己的文档里会写明白。

上述 toml 文件也可能参与插件的配置（如绑定快捷键），因插件而不同。

插件相关的资料：

- [CLI](https://yazi-rs.github.io/docs/cli): 介绍 `ya pkg` 的。
- [Plugins (BETA)](https://yazi-rs.github.io/docs/plugins/overview): 插件系统的架构。
- 插件集合：
  - <https://yazi-rs.github.io/docs/resources/>.
  - <https://github.com/yazi-rs/plugins>.
- [Flavors (BETA)](https://yazi-rs.github.io/docs/flavors/overview): 主题系统的架构。
- 主题集合：<https://github.com/yazi-rs/flavors>.

## Yazi 的操作方法

- 在命令行执行 `yazi`（如果配置了 Shell 自定义函数还可以用 `y`）启动。
- 操作方式接近 vim，[Quick Start](https://yazi-rs.github.io/docs/quick-start) 章节中有详细介绍。
- 按 `q` 退出 Yazi。
- 按 `~` 或 `F1` 打开帮助（主要是什么键绑定了什么功能）。
