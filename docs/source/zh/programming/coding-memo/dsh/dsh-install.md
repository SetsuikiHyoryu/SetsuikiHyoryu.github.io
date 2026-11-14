# 安装 dsh 与插件

本文以用户最多的 Windows 为例，使用的 shell 是 OS 自带的 PowerShell 5。  
本文的 Shell 语法只涉及变量与查看，但是不同 shell 语法不一样，  
类 unix 用户可以跟着本文的流程做，但要执行的命令建议发给 AI 改一下。

本文需要用户具备开机上网的基本能力。

## 准备环境

按 `Win + R`，输入 `powershell` 打开 Shell 以操作电脑。

安装 pnpm, Node.js (fnm 管理), Git。

```powershell
# mac 可以用 Homebrew 装，linux 有 apt 等包管理器。
# Git LFS 在 winget 的 Git 里自带了，但是 mac 上没有，要另外装，apt 不清楚。
winget install pnpm.pnpm Git.Git Schniz.fnm
```

重启 Shell 以加载最新配置。

```powershell
# 让 fnm 的 shell 集成持久化。
fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression

# 向 $PROFILE 写入 fnm env 配置。
Add-Content $PROFILE 'fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression'

# 版本号按最新的 LTS 版本即可。
fnm install --use 26
```

然后确认安装成功。

```powershell
# 下面这些命令都有版本号输出即可。
pnpm --version
git --version
node --version # 注意版本需要 >= 24.9
npm --version
```

一些初始化处理。

```powershell
# 建立 PNPM_HOME 并把其 bin 目录写进 PATH。
pnpm setup
# 启用 git lfs。
git lfs install
```

新开一个 shell 以使配置生效。  
接着准备一个放东西的目录。

```powershell
# 这里写的目录只是示例，完全可以自定义。
mkdir D:\tools
```

## 安装 dsh

**注意以下三种方式中三选一即可。**

### 从源码安装

```powershell
# 准备目录。
mkdir D:\tools\dsh\deepseek-harness
cd D:\tools\dsh\deepseek-harness

# 下载 DeepSeek Harness 仓库。
git clone https://github.com/deepseek-ai/deepseek-harness.git .

# 安装依赖。
pnpm install
# 编译仓库。
pnpm run build

# 在 bin 目录创建符号链接。
# 这一步之前需要确保 `pnpm setup` 已执行。
# 之后重新 `pnpm run build` 不需要重装
# `D:\tools\dsh\deepseek-harness` 不能移动或删除，否则 dsh 命令失效
pnpm add --global ./apps/cli
```

验证安装成功：

```powershell
# 有版本号输出即可。
dsh --version
```

更新方式：

```powershell
# 在这个目录下执行：`D:\tools\dsh\deepseek-harness`
git pull origin master
pnpm install
pnpm run build
```

### 或者用 pnpm 安装 dsh

```powershell
# 查看 bin 目录位置。
echo "$env:PNPM_HOME\bin"

# 安装 dsh
pnpm add --global @deepseek-ai/dsh

# pnpm 10 以后默认不执行依赖的 install 脚本，`node-pty`、`koffi` 这类必须批准，否则要到运行时才报错。
# 使用源码安装的方式就不用批准脚本。
pnpm approve-builds -g
```

验证安装成功：

```powershell
# 有版本号输出即可。
dsh --version
```

更新方式：

```powershell
pnpm add --global @deepseek-ai/dsh
```

### 或者用 npm 安装 dsh（仍需安装 pnpm 供 dsh 使用）

因为多版本 Node 在切换版本后 npm 全局的包和命令都会变化，  
所以装到固定前缀（自定义全局可执行文件目录），  
全局可执行文件就是新建 shell 会话时可以直接敲名称执行的程序或脚本。
固定前缀里的东西在切换 Node 版本时不会发生改变。

```powershell
# 定义一个变量，值为你自己想放入全局可执行文件的目录。
# Windows 上这个目录本身就是 bin 目录，没有 `bin` 子目录，类 Unix 上则会有。
$prefix = "D:\tools\npm-global"

# 安装 dsh
npm install --global --prefix $prefix @deepseek-ai/dsh
```

把 `$prefix` 加进用户 PATH

```powershell
# 1. 获取当前用户 Path 的值。
$current = [System.Environment]::GetEnvironmentVariable("Path", "User")
# 2. 定义你要添加的新路径。
# 注意如果 OS 是类 Unix，这里要写到 `bin` 那一层。
$newone = "D:\tools\npm-global"
# 3. 写回用户环境变量
[System.Environment]::SetEnvironmentVariable("Path", "$current;$newone", "User")
# 4. 查看用户环境变量
[System.Environment]::GetEnvironmentVariable("Path", "User") -split ';'
```

验证安装成功：

```powershell
# 有版本号输出即可。
dsh --version
```

更新方式：

```powershell
$prefix = "D:\tools\npm-global"
npm install --global --prefix $prefix @deepseek-ai/dsh
```

## 启动

### 启动 WEB 版

```powershell
# 可以在任意目录下执行。
# 等价于 `dsh --profile web`。
dsh web
```

如果要使用桌面版需要打包安装包再另外安装，  
因为桌面版是 Electron 跑 web 服务，所以本文不多做介绍。  
有需要的话让 AI 读一下 deepseek-harness 仓库即可。

## 装长征机插件

### 启动动画

```powershell
# 安装插件。
# 在任意目录下执行。
dsh plugin --profile web add https://github.com/huzhengcai471-crypto/dsh-startup-secret.git
```

### UI 主题

因为带媒体资源的插件，需要用到 LFS 下载，直接从 github 装只能获得资源的指针。
本地打包再装比较简单。

```powershell
# 进到合适的目录。
cd D:\tools\dsh\deepseek-harness

# 下载仓库
git clone https://github.com/huzhengcai471-crypto/cyber-red-ui.git
# 进入仓库
cd cyber-red-ui

# 拉取媒体资源
git lfs pull
# 打包脚本和资源
pnpm pack

# 安装插件。
dsh plugin --profile web add file:/Users/hyoryu/Documents/community/DeepSeek/cyber-red-ui/dsh-cyber-red-ui-1.3.0.tgz
```

## Q&A

### pack 和 build 的区别

`build` 是「源码 → 产物」，`pack` 是「产物 → 可分发包」。  
长征机 UI 插件的 `client.js` 已经是可执行形态：用 `h()`（即 `createElement`）而不是 JSX，  
模块由宿主注入的 `require` 提供，所以既不需要 JSX 转换，也不需要打包器合并。  
JavaScript 本来就是解释执行的，源码自身就是产物。

要不要先 build，看两点：  
`scripts` 里有没有 `build`、仓库里是否已提交产物。  
产物由 `prepack` 或 `prepare` 生成的话，`pack` 会自动触发。

### 为什么打包成 tarball 而不是直接给文件

目录、tarball、git 依赖都能装，区别在 pnpm 怎么处理：

|                | tarball        | 目录（`file:` 指向文件夹） |
| -------------- | -------------- | -------------------------- |
| pnpm 的处理    | 解包成真实文件 | 通常是软链到源目录         |
| 源目录删掉     | 照常工作       | profile 直接坏掉           |
| 别人复现配置   | 能             | 不能，指向本机绝对路径     |
| `files` 裁剪   | 生效           | 不生效，整仓可见           |
| `prepack` 检查 | 会跑           | 不跑                       |

tarball 只是容器（tar + gzip），不改变内容，解开就是那些不用编译的源文件。

### 本地打包和下载校验 SHA256 的安全度一样吗

一样。两者都归结为一次性信任一个带外的身份。

|          | 下载 + SHA256                        | 本地 pack                         |
| -------- | ------------------------------------ | --------------------------------- |
| 信任锚点 | registry 账号 + TLS + 你手上那份哈希 | 官方 remote + git commit 内容寻址 |
| 防的是   | 传输、镜像、缓存替换                 | 仓库被替换或本地改动              |
| 失效条件 | 哈希来自被污染的渠道                 | commit 不是从官方 remote 拿的那条 |

两条路都会在自己机器上执行作者的脚本  
（`pack` 跑 `prepack`，安装跑 `install` / `postinstall`），所以本地打包并不更安全。  
差别在功能而非安全：git 安装路径不走 LFS smudge，媒体会变成指针文件。

### 那本地打包要满足什么前提

1. 工作树干净。有未提交改动时，装进去的是那个状态，上游没有任何校验记录。
2. 发布产物来自同一棵树。若 release 是 CI 在打包时现场构建出未提交的产物，本地 pack 会装到不同内容。

### 哈希到底差在哪

同一棵工作树、同一个提交，换打包器就差 10 KB 量级。实测（211 MB 的包）：

|             | 压缩后      | 解压后      |
| ----------- | ----------- | ----------- |
| `npm pack`  | 211,828,869 | 217,740,288 |
| `pnpm pack` | 211,839,350 | 217,738,752 |
| 作者发布    | 211,828,065 | —           |

解压后只差 1,536 字节，说明内容几乎相同；  
压缩后反而差 10 KB，那是 deflate 级别与条目顺序造成的。

行尾不是主因：两个包里同一个文件解出来**都是 CRLF**，完全一样。  
真按行尾算的话，10,354 个 CR 高度可压缩，压完只值约 800 字节（发布包比本地 npm 包小 804 字节）。

所以主次是：**打包器差异为主，行尾为辅**。
