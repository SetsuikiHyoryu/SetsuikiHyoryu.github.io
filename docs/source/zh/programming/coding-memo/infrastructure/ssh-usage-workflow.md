# SSH 使用工作流

本文以 Windows 系统作为服务器为例。

## 配置服务器机

### 1. 安装 OpenSSH Server

在设置中的 Systmen Components 之类的地方。

### 2. 启动 SSH 服务

#### 2.1. 检查 `sshd.exe` 是否存在

```PowerShell
# 安装 OpenSSH Server 后这个程序就会存在。
# 存在的话会打印出程序信息，不存在会报错。
# 未启动时 `Status` 属性会显示为 `Stopped`，正在运行时为 `Running`。
Get-Service sshd
```

#### 2.2. 启动 `sshd`

```PowerShell
Start-Service sshd
```

如有需要可设为开机自启：

```PowerShell
Set-Service -Name sshd -StartupType Automatic
```

停止 `sshd` 的话这样做：

```PowerShell
Stop-Service sshd
```

### 3. 确认 `sshd` 在监听 `22` 端口

```PowerShell
netstat -ano | findstr :22
```

### 4. 查看访问用信息

#### 4.1. 查看用户名

```PowerShell
# `Enabled` 属性为 `Ture` 才可用来访问。
# `whoami` 亦可查看，不过看不出是否可用。
# 另外必须是有密码的用户。
Get-LocalUser
```

#### 4.2. 查看主机名

```PowerShell
hostname
```

用 IP 地址访问也可以，但是如果 IP 会随意变化，  
`known_hosts` 也会不断变化。  
但是这时需要在 hosts 中加主机名和 IP 的映射。

## 使用客户端机访问

```PowerShell
ssh username@hostname
```

## 使用 `scp` 将客户端文件复制到服务端

```PowerShell
scp -r ./sshtest tayut@192.168.0.6:C:/Users/tayut/
```
