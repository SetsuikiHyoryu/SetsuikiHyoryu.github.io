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
