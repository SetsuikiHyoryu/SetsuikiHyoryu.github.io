# pnpm 安装及修改依赖保存路径

## 官方文档

<https://pnpm.io/zh/installation>

## 安装

| OS      | 安装方法                                                                                             |
| ------- | ---------------------------------------------------------------------------------------------------- |
| Windows | [使用 winget 安装](https://pnpm.io/zh/installation#%E4%BD%BF%E7%94%A8winget%E5%AE%89%E8%A3%85)       |
| MacOS   | [使用 HomeBrew 安装](https://pnpm.io/zh/installation#%E4%BD%BF%E7%94%A8-homebrew-%E5%AE%89%E8%A3%85) |

## 管理配置

### 可用配置项

<https://pnpm.io/zh/npmrc>

### 使用全局配置文件 `rc` 修改配置

<https://pnpm.io/zh/cli/config#pnpm-config>

### 使用命令行修改配置

<https://pnpm.io/zh/cli/config#%E5%91%BD%E4%BB%A4%E8%A1%8C>

## 修改依赖保存路径

### 查看当前依赖保存路径

```sh
pnpm config --global get cache-dir
```

### 编辑 `rc` 文件修改依赖保存路径

```sh
global-dir=E:\SOFT\programming\package-manage\pnpm\global_node_modules
global-bin-dir=E:\SOFT\programming\package-manage\pnpm
store-dir=E:\SOFT\programming\package-manage\pnpm\store
state-dir=E:\SOFT\programming\package-manage\pnpm\state
# `cache-dir` 为依赖保存路径
cache-dir=E:\SOFT\programming\package-manage\pnpm\cache
```

## 在 `package.json` 中限制 Node 版本和包管理工具

### `package.json` 配置项官方文档

| 字段             | 文档位置                                                                             |
| ---------------- | ------------------------------------------------------------------------------------ |
| `packageManager` | <https://nodejs.org/dist/latest-v16.x/docs/api/all.html#all_packages_packagemanager> |
| `engines`        | <https://docs.npmjs.com/cli/v10/configuring-npm/package-json#engines>                |

### `engines` 设置示例

```json
{
  "packageManager": "pnpm@9.5.0",
  "engines": {
    "node": ">=18",
    "pnpm": ">=9.5.0",
    "npm": "not in supported",
    "yarn": "not in supported"
  }
}
```
