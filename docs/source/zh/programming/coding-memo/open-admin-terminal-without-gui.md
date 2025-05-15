# 以不用 GUI 操作的方式启动有管理员权限的终端

## Windows

```bash
# 在 Powershell 中执行下文。
Start-Process pwsh -Verb runas
```

- `pwsh`: 打开版本 v7 的 Powershell。如果是 `powershell` 则是 OS 自带的 Powershell。
- `Verb`: Windows Shell 术语，意为“动词”。
- `runas`: “动词”之一，意为“以管员身份运行”。
