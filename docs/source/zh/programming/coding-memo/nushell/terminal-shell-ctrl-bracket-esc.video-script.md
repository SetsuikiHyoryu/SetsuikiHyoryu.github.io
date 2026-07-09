# 视频脚本：Shell 的 vi 模式下映射左方括号键（`Ctrl + [` -> `Esc`）

## 分镜表

### 场景 1｜Neovim 中的实际情况

**画面**：

演示 Neovim `Ctrl + [` 退出输入模式。

**旁白**：

> Vim 退出输入模式是按 `Esc`，也可以按 `Ctrl + [`。

### 场景 2｜PowerShell 配置前

**画面**：

演示 PowerShell 内 `Ctrl + [` 只会输出 `^[`

**旁白**：

- Shell 支持 Vi 但不支持 `Ctrl + [`。
- 本应配置终端模拟器键位，但 Windows Terminal 不生效（不是重点所以不演示）。
- mac WezTerm 生效。

### 场景 3｜PowerShell 配置失败演示

**画面**：

放开 `Ctrl + [` 映射行，`. $PROFILE` 以应用。  
再次演示不能退出输入模式，而是打印出 `^[`。

**旁白**：

- PowerShell 中直接映射 `Ctrl + [` 不生效。

### 场景 4｜讲按键输入原理

**画面**：

手敲按键输入流：

`物理按压键体 -> 扫描码（硬件） -> 虚拟键码（OS） -> 字符（Shell）`

```text
物理按键
  → 扫描码 (Scan Code)        ← 硬件层面
  → 虚拟键码 (Virtual Key)    ← Windows 层面，Ctrl + [ 对应 Oem4
  → 字符 / 控制序列            ← 应用层面，PSReadLine、Nushell 在这一层读
```

**旁白**：

> 从按压键体到输出字符，其实中间还会经历扫描码和虚拟键码两个阶段。  
> Powershell 映射 `[` 时会试图寻找最终字符的输入，  
> 但可能由于终端兼容性问题最终乱码了，得到的是 `^[`。

### 场景 5｜绑定虛拟键码

**画面**：

演示 `[System.Console]::ReadKey()` 输入 `[`，得到 `Oem4`。  
放开 `Ctrl + Oem4` 行，`. $PROFILE` 以应用，  
演示能退出输入模式。  
用 `[Microsoft.PowerShell.PSConsoleReadLine]::ShowKeyBindings()` 验证。

**旁白**：

> PowerShell 支持直接绑定虚拟键码，  
> 可以通过 `[System.Console]::ReadKey()` 方法找到 `[` 的虚拟键码。  
> 可以通过 `[Microsoft.PowerShell.PSConsoleReadLine]::ShowKeyBindings()` 验证。

### 场景 6｜Nushell

**画面**：

演示放开配置前无效。  
放开配置，`nu` 新开，演示有效。

**旁白**：

- Nushell 中可以直接用字符，不需要虚拟键码。

### 场景 7｜Nushell 配置试错方式

**画面**：

调用 `keybindings list` 演示都能填什么。  
一对一比对。  
演示 `keybindings listen` 监听 `[`，`Esc` 退出。  
演示官网提到了大小写不敏感。  
演示官网提到了 `SwitchMode` 和 兼容 `ViChangeMode`。

**旁白**：

- `keybindings list` 查看配置值。
- `keybindings listen` 可以监听输入内容。
- 大小写不敏感。
- new `SwitchMode`, old `ViChangeMode`。

### 场景 8｜总结与结尾

**画面**：回到三层流程图，两个方案的代码并排放在旁边。

**旁白**：

> 今天的视频就到这里，我会在评论区放出配置的链接。  
> 谢谢大家收看。
