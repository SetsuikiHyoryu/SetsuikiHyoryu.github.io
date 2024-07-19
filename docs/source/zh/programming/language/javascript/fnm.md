# Node 版本管理工具 fnm

## 官方文档

<https://github.com/Schniz/fnm?tab=readme-ov-file#installation>

## 安装

| OS      | 安装方法                                                                                         | 设置 Shell                                                                |
| ------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| Windows | [使用 winget 安装](https://github.com/Schniz/fnm?tab=readme-ov-file#using-winget-windows)        | [powershell](https://github.com/Schniz/fnm?tab=readme-ov-file#powershell) |
| MacOS   | [使用 HomeBrew 安装](https://github.com/Schniz/fnm?tab=readme-ov-file#using-homebrew-macoslinux) | [zsh](https://github.com/Schniz/fnm?tab=readme-ov-file#zsh)               |

## 修改 Node 安装路径

### 查看当前 Node 安装路径

```sh
# 结果中 `FNM_DIR` 指向的就是当前的 Node 安装路径
fnm env
```

### 以下两种修改方式中二选一执行

#### 使用全局变量的方式修改

修改（或添加）全局 `FNM_DIR` 环境变量。

#### 使用命令行参数的方式修改

在安装后修改 Shell 文件时，其中会包含执行 fnm 命令行命令的代码，在其后添加 `--fnm-dir <BASE_DIR>` 。
