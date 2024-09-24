# Neovim 修改文件文字编码

## 查看 Neovim 编码

```shell
set encoding
```

## 查看当前文件编码

```shell
set fileencoding
```

## 使用指定编码重新打开当前文件

```shell
# help ++enc
edit ++encoding=shift_jis
```

## 使用指定编码保存文件

```shell
# help ++enc
write ++encoding=utf-8 new-file.extension
```
