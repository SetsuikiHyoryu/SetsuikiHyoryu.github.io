# Neovim 帮助文档细节

## `help`

- 在输入 `help word` 的过程中按 CTRL-D 可以查看匹配 word 的所有入口。

## `help [quotex]`

- 大小写使用相同的寄存器。
- 小写时替换之前的内容。
- 大写时在之前的内容后拼接。
- 不指定时会储存到未命名的寄存器（默认的临时文本寄存器）中。

## User Manual

### usr_02.txt

- U: 相较于 CTRL-R 的区别是 U 为行内而 CTRL-R 为全局。

### usr_03.txt

- \`\` / '': 跳回最后一次跳转前的位置。
- `:jumps`: 打开跳转位置列表。
- 特殊 marks:
  - ' The cursor position before doing a jump
  - " The cursor position when last editing the file
  - [ Start of the last change
  - ] End of the last change

### usr_04.txt

- dw 不会删除下一个单词的开始，这叫 exclusive，与之相对的叫 inclusive。
- c 和 d 的 inclusive / exclusive 基本一致，但 cw 不会删除下一个单词前的空格，而 dw 会。这是 vi 历史原因。
- `"*` 也是剪贴板寄存器。
- daw 会删除单词之后的空格（如果在行末则是单词前的空格）。
- dis 删除一句话（sentence），dip 删除一个段落（paragraph）。`help text-objects`。
- a 会删除空格，所以更适合纯删除；i 不会删除空格，所以更适合删完后修改。
- `r<Enter>` 是用换行符替换文字。
- 3d2w 表示删除两个单词，执行三次。

### usr_07.txt

- CTRL-^: 在两个文件中跳转。
- `": 回到上个文件的最后光标处（没试成功）。
- `.: 回到上个文件最后修改处（没试成功）。
- mX: 小写字母为单文件 local 标记，大写字母为多文件间 global 标记。
- `:write >> file`: 将当前文件（或选中区域）以 append 的方式写入指定文件。
- `:saveas file`: 将当前缓冲区保存为新文件并打开它。
- `:file file`: 修改当前缓冲区文件名。

### usr_08.txt Splitting windows

- `:close`: 关闭 window 或 tab，可以预防在最后一个窗口时退出 Neovim。
  - 在只有空白 buffer 和 help 时非常管用。
- `:only`: 关闭当前以外的所有窗口。
- `:split file`: 以分割 window 的方式打开指定的文件。
- `:new` / `vnew`: 以分割 window 的方式打开空白 buffer。
- `:3new` / `3split`: 以三行高度的方式分割新 windows。
- `:vertical new` / `:vertical split`: 将使命令垂直拆分 window。
- CTRL-W t: move to the TOP window。
- CTRL-W b: move to the BOTTOM window。
- `Q_wi`: muliti-window commands。
- CTRL-W K: 大写 HJKL 修改 window 位置（最一端）。
- `:all` / `:vertical all`: 将 argument list 中的每一个文件在新 window 里打开。
- `nvim -d filea fileb`: 以垂直 diff 的方式打开两个文件。
- 在已经打开了一个文件的情况下可以执行 `:vertical diffsplit fileb` 来实现垂直比对。
- `:diffupdate`, `:dp`, `:do`: 对差异进进处理。可以查看帮助 `diff-mode`。
- 许多命令加 `s` 表示用 split 打开。快捷键前则可以加 CTWRL-W。
- 可以用 `:leftabove split` 等的方式指定窗口的位置。
