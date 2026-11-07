# 使用裸仓库管理家目录的 dotfile

## 什么是裸仓库

裸仓库指 `.git` 目录单独成为一个仓库（因此不能在裸仓库内直接检出文件）。  
通过 `--git-dir` 和 `--work-tree` 选项可以在保持关联的前提下分离版本管理和工作目录。

## 为什么要用裸仓库

家目录内容庞杂并且包含隐私信息，不适合直接作为仓库。  
通过裸仓库解耦版本管理和工作目录，可以使仓库边界停留在家目录之外。

## 设置流程

### 1. 创建裸仓库

```powershell
git init --bare ~/dotfile
```

### 2. 在 shell 里为 git 命令设置别名

```powershell
# $PROFILE
function dotfile {
    git --git-dir="$HOME\dotfile\" --work-tree="$HOME" -c status.showUntrackedFiles=no @args
}
```

这句 git 命令是说，以指定裸仓库为 git 仓库，以家目录为工作目录，执行 git 命令。  
同时设置状态不显示未追踪文件。

直接用这个别名调用 add, commit, remote, push 即可共享仓库。  
注意这时调用 `git add .` 依然会加入未追踪的文件，加新文件需要指定文件路径；  
只加修改可以改用 `git add --update`。

### 3. 从仓库中同步配置

#### 3.1. 克隆裸仓库

```powershell
git clone --bare <origin> $HOME/dotfile
```

#### 3.2. 检出文件

```powershell
dotfile checkout
```

如果因为既存文件而发生冲突，建议先移走原文件，在同步远程后再合并或遗弃旧内容。

#### 3.3. 从远程更新

```powershell
dotfile pull
```
