# 在终端内使用 Shell 映射 `Ctrl + [` 以退出 vi 输入模式（与 Esc 行为一致）

## 概要

在 Windows Terminal 的设置中将 `Ctrl + [` 映射为 Esc 键时无法退出 Vi 输入模式。  
尝试修改 Shell 的设置后成功，本文介绍我常用的 Nushell 和 PowerShell 中的配置。

## PowerShell

```PowerShell
# Set PSReadLine Mode (Windows 11 默认的 PowerShell 版本即可使用)。
Set-PSReadLineOption -EditMode vi

# 1. 在计算机内部，按下按键会经历：物理扫描码 -> 虚拟键码 -> 字符编码 的转换。
# 2. 当写 "Ctrl+[" 时，PowerShell 试图寻找被系统“翻译”成字符 `[` 的输入，
#    由于某种终端兼容性问题这个翻译“乱码”了，或未能匹配 PSReadLine 预设字符串，
#    结果就直接把原始控制序列 `^[` 喷在了屏幕上。
# 3. 通过 `[Console]::ReadKey()` 发现，`[` 的虚拟键码是 `Oem4`，直接绑定可生效。
Set-PSReadLineKeyHandler -Chord "Ctrl+Oem4" -ViMode Insert -Function ViCommandMode
```

## Nushell

```nu
# - 查看 keybindings 可写属性值： `keybindings list --<property-for-filter>`
# - 监听按键：`keybindings listen`
#
# See: <https://www.nushell.sh/blog/2025-09-02-nushell_0_107_0.html#new-keybinding-vichangemode-16327-toc>
$env.config.keybindings ++= [
    {
        name: ctrl_left_bracket_to_escape
        modifier: Control
        keycode: "char_["
        mode: [vi_insert]
        event: [
            { send: ViChangeMode, mode: normal },
            { send: Left },
        ]
    }
]
```
