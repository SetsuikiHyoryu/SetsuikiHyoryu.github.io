# GUI を使わずに管理者権限のターミナルを開く

## Windows

```bash
# Powershell でこれを実行する。
Start-Process pwsh -Verb runas
```

- `pwsh`: バージョン v7 の Powershell を開く。`powershell` の場合の OS 初期の Powershell になる。
- `Verb`: Windows Shell 術語，“動詞”の意味である。
- `runas`: “動詞”の一つ、“管理者身分で実行する”の意味である。
