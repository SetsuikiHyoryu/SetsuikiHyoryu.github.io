# git 原生コマンドで未アプロードのコミットを確認する

## オリジンのコミットを含まない全てのローカルブランチのコミットを確認する

```shell
git log --branches --not --remotes
```

## 指定したオリジンブランチと指定したローカルブランチとの差異を確認する

```shell
git log origin/main.. # Default HEAD
git log origin/main..HEAD
git log origin/main..main
```

## 指定した上流ブランチと指定したローカルブランチとの差異を確認する

```shell
# powershell では引用符が必要
git log '@{upstream}..' # Default HEAD
git log '@{u}..HEAD' # upstream は u に略せる
git log '@{u}..main'
```
