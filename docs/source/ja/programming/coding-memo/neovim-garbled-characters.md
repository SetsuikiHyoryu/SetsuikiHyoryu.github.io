# Neovim でファイルの文字コードを変更する

## Neovim コードを確認する

```shell
set encoding
```

## 現在のファイルの文字コードを確認する

```shell
set fileencoding
```

## 指定したコードで現在のファイルを再度開く

```shell
# help ++enc
edit ++encoding=shift_jis
```

## 指定したコードでファイルを保存する

```shell
# help ++enc
write ++encoding=utf-8 new-file.extension
```
