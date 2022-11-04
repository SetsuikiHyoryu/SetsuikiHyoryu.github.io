# Rust | 更改 Windows Kits (SDK) 安装路径

## 问题描述

在 Windows 上安装 Rust 时会提示你要用 Visual Studio 安装 C++ desktop development 包，原因是 Rust 依赖于其中的 Windows SDK。但是按这种方式只能进行默认安装，而 Windows SDK 的默认安装会污染路径环境的问题。

这不是 Rust 特有的问题，如果你用 C++ 开发，也会遇到相同的问题。

## 解决方案

首先应该采用手动的方式安装 Windows SDK，安装器可以在 Windows 的[官网][windowsHome]上下到。但是运行后会发现不允许修改默认安装路径。这时候需要修改注册表中 Windows Kits 的安装路径。

修改后 Windows SDK 的安装器就会将修改后的路径识别为默认路径。接着安装下去，完成后 Windows Kits 目录所在的路径就会和注册表修改后的路径一致。

我一开始想过手动移动 Windows Kits 目录，但是执行 Rust 的命令会报错说找不到 `Link.exe`，即便修改完注册表，再用 Visual Studio 安装一遍 C++ desktop development 也会报错说打不开 `kernel32.lib`。我最后尝试了上述方法才成功。

### 参考资料

- [change windows kit common installation path](https://stackoverflow.com/questions/44801241/change-windows-kit-common-installation-path)

## 操作流程

1. 运行 regedit 打开注册表。
2. 找到 `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows Kits\Installed Roots` 并选中。如果不存在则需要手动创建。
3. 修改 `KitsRoot10` 为你期望的路径。如果存在多个类似字段则都需要修改。
4. 从 Windows [官网][windowsHome]下载 Windows SDK 安装器。
5. 打开安装器安装 Windows SDK，此时的默认安装路径应为注册表中修改后的路径。
6. 安装完毕后建议删除旧的 SDK。
7. 执行 Rust 命令确认能否正常操作。

<!-- 链接变量 -->

[windowsHome]: https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/
