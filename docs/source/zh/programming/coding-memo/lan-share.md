# 使用 LAN 共享文件

## 判断两台计算机在同一网络下

查看两台计算机各自的网络接口下是否存在相同的网络设备并且拥有相同的子网掩码，并且能互相 ping 通对方的 IP 地址。网络接口下有什么网络设备可以通过 `arp -a` 命令打印网络接口查看。

一台计算机通常有多个网络接口，Windows 机可以使用 `ipconfig` 命令查看本机的网络接口（网络适配器），Mac 机可以使用 `ifconfig` 命令查看网络接口。Windows 需要通过默认网关来判断当前的接口是哪个，而 Mac 当前的网络接口通常为 en0(物理以太网) / en1(Wi-Fi)。Linux 我不了解。

### 查看计算机连接到网络的网络接口

#### Windows 下的网络接口（网络适配器）

执行 `ipconfig` 查看网络配置信息，它在根级列出所有的网络适配器。

```shell
イーサネット アダプター イーサネット <number>:

   説明. . . . . . . . . . . . . . . . .: Some text
   物理アドレス. . . . . . . . . . . . .: xx-xx-xx-xx-xx-xx
   IPv4 アドレス . . . . . . . . . . . .: xxx.xxx.x.x
   サブネット マスク . . . . . . . . . .: xxx.xxx.x.x
   デフォルト ゲートウェイ . . . . . . .: xxxx::xxxx:xxxx:xxxx:xxxxx
                                          xxx.xxx.x.x
   ...
```

- `イーサネット アダプター イーサネット <number>`：网络适配器。
- `デフォルト ゲートウェイ`：默认网关。计算机发送数据到外部网络时的网关，因此可以用来特定哪个适配器是当前计算机用来连接网络的设备。
- `説明`：对网络适配器的描述。虚拟机也会有默认网关，所以需要通过说明排除虚拟机。
- `サブネット マスク`：子网掩码。
- `IPv4 アドレス`：IPv4 地址。当前计算连接到网络的 IP 地址。这个地址就可以用来在 ARP 表中特定当前计算机的网絡接口。并可以在另一台机器上使用 `ping <IPv4 address>` 命令来测试是否能 ping 通。

#### Mac 下的网络接口

```shell
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
    ether xx:xx:xx:xx:xx:xx
    inet6 fe80::acaf:cbff:fe4c:7e11%en0 prefixlen 64 secured scopeid 0x4
    inet 192.168.1.2 netmask 0xffffff00 broadcast 192.168.1.255
    nd6 options=201<PERFORMNUD,DAD>
    media: autoselect
    status: active
```

- `en0`：网络接口名称。
- `inet`：IPv4 地址。当前计算连接到网络的 IP 地址。这个地址就可以用来在 ARP 表中特定当前计算机的网絡接口。并可以在另一台机器上使用 `ping <IPv4 address>` 命令来测试是否能 ping 通。
- `netmask`：子网掩码。Mac 中以 16 进制表示，和 10 进制的换算关系类似于 CSS 中颜色的 `#ffffff` == `rgb(255,255,255)` 的关系。

### 查看计算机的 ARP 表

ARP（Address Resolution Protocol），一个由网络设备维护的地址解析表，用于将 IP 地址与 MAC 地址之间进行映设，因为设备之间的通信需要知道目标设备的 MAC 地址。

#### Windows 下查看 ARP 表

使用 `arp -a`（`-a` 意为 “all”）查看。

```shell
Interface: 192.168.1.10 --- 0xe
  Internet Address      Physical Address      Type
  192.168.1.1           ac-d1-b8-12-34-56     dynamic
  192.168.1.100         00-24-8c-12-34-56     dynamic
  192.168.1.110         08-00-27-12-34-56     dynamic
```

- `Interface: 192.168.1.10 --- 0xe`：当前计算机的网络接口信息。
- `Internet Address`：与当前计算机相连的设备的 IP 地址。
- `Physical Address`：与当前计算机相连的设备的 MAC 地址。
- `Type`：当前 ARP 条目的类型。
  - 静态：由管理员手动添加，在管理员更改前不会变。
  - 动态：由实际的网络通信动态添加。

#### Mac 下查看 ARP 表

使用 `arp -a`（`-a` 意为 “all”）查看。Linux 下格式应当差不多，但网络接口名称的规则可能不一样。

```shell
? (192.168.1.1) at ac-d1-b8-12-34-56 on en0 ifscope [ethernet]
? (192.168.1.100) at 00-24-8c-12-34-56 on en0 ifscope [ethernet]
? (192.168.1.110) at 08-00-27-12-34-56 on en0 ifscope [ethernet]
```

- `?`：设备的主机名，无法解析主机名时显示为“?”。
- `(xxx.xxx.x.x)`：局域网内设备的 IP 地址。
- `at ac-d1-b8-12-34-56`：IP 地址对应的 MAC 地址。
- `on en0`：指针对于某网络接口，en0 是以太网接口。
- `ifscope`：作用范围。
- `[ethernet]`：网络接口类型，“ethernet” 是以太网。

## Windows 上创建共享文件夹

1. 打开 PowerShell 新建一个文件夹（使用 GUI 操作亦可）。
2. 执行 `net share` 命令指定共享的文件夹，同命令也可查看当前所有的共享文件夹。详见下文。
3. 用其他计算机设备访问该目录。

### Net Share 命令

#### 指定文件夹为共享文件夹

需要使用管理员权限打开 PowerShell。

```shell
net share <sharename>=<folderpath> /grant:<useranme>,<permission>
```

- `sharename`：共享名称
- `folderpath`：要共享的文件夹路径。**必须严格按照 Windows 规则，否则访问不到**。官方方档 [Naming Files, Paths, and Namespaces](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#paths) 中可查看路径名规则。

- `username`：被授权访问共享文件夹的 Windows 用户
- `permission`：`READ`（只读） 或 `FULL`（完全）。授予访问用户的权限。

#### 查看当前共享文件夹列表

```shell
# Command
net share
```

```shell
# Result
共有名       リソース                            注釈

-------------------------------------------------------------------------------
sharename    X:\xxx
```

### 用 Mac 访问 Windows 共享文件夹

1. 打开 Finder，在上方菜单栏中选择“前往” > “连接到服务器”（快捷键：Command + K）
2. 输入路径 `smb://<Windows 计算机名称或网络接口 IP 地址>/<共享名称>`。**不使用共享名称而使用文件夹名会报错**。
3. 输入 Windows 用户验证信息，**大小写敏感**。
4. Finder 中会打开共享文件夹。
