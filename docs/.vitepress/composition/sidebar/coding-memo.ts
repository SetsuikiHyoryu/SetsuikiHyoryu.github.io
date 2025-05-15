import { DefaultTheme } from 'vitepress'

/** 编程 - 备忘录边栏 */
export function useCodingMemoSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH_CHINESE = '/zh/programming/coding-memo/'
  const ROOT_PATH_CHINESE_GIT = `${ROOT_PATH_CHINESE}git/`
  const ROOT_PATH_CHINESE_NEOVIM = `${ROOT_PATH_CHINESE}neovim/`
  const ROOT_PATH_CHINESE_NUSHELL = `${ROOT_PATH_CHINESE}/nushell`

  const ROOT_PATH_JAPANESE = '/ja/programming/coding-memo/'
  const ROOT_PATH_JAPANESE_GIT = `${ROOT_PATH_JAPANESE}git/`
  const ROOT_PATH_JAPANESE_NEOVIM = `${ROOT_PATH_JAPANESE}neovim/`

  return {
    [ROOT_PATH_CHINESE]: [
      {
        text: '编程 - 备忘录',
        items: [{ text: '回到首页', link: '/zh/' }],
      },
      {
        text: 'Neovim',
        collapsed: false,
        items: [
          {
            text: 'Neovim 帮助文档细节',
            link: `${ROOT_PATH_CHINESE_NEOVIM}neovim-help-document-detail`,
          },
          {
            text: 'Neovim 修改文件文字编码',
            link: `${ROOT_PATH_CHINESE_NEOVIM}neovim-garbled-characters`,
          },
          {
            text: 'Neovim 0.10 内置折叠命令',
            link: `${ROOT_PATH_CHINESE_NEOVIM}neovim-fold-commands`,
          },
          {
            text: 'Neovim 全局替换',
            link: `${ROOT_PATH_CHINESE_NEOVIM}neovim-global-replace`,
          },
        ],
      },
      {
        text: 'Nushell',
        collapsed: false,
        items: [
          {
            text: 'Nushell 配置 fnm 使用 Node.js',
            link: `${ROOT_PATH_CHINESE_NUSHELL}nushell-fnm`,
          },
        ],
      },
      {
        text: 'Git',
        collapsed: false,
        items: [
          {
            text: 'GitHub 多账户管理及匿名邮箱',
            link: `${ROOT_PATH_CHINESE_GIT}github-multiple-account`,
          },
          {
            text: '由被 fork 的仓库的用户修改 fork 分支',
            link: `${ROOT_PATH_CHINESE_GIT}fork-branch-changes-by-forked-repository-user`,
          },
          {
            text: 'Git 原生命令查看未上传提交记录',
            link: `${ROOT_PATH_CHINESE_GIT}git-unpushed`,
          },
          {
            text: '`git log` / `git show`',
            link: `${ROOT_PATH_CHINESE_GIT}git-log-and-show`,
          },
          {
            text: '使用 `git bundle` 脱机复刻提交历史',
            link: `${ROOT_PATH_CHINESE_GIT}git-bundle`,
          },
        ],
      },
      {
        text: '配置路径',
        collapsed: false,
        items: [
          {
            text: 'Maven 配置依赖包安装路径',
            link: `${ROOT_PATH_CHINESE}maven-repository`,
          },
          {
            text: 'Rust | 更改 Windows Kits (SDK) 安装路径',
            link: `${ROOT_PATH_CHINESE}rust-change-windows-kits-root`,
          },
        ],
      },
      {
        text: '工具美化',
        collapsed: false,
        items: [
          {
            text: '自定义 Git Bash 命令行提示符（Prompt）',
            link: `${ROOT_PATH_CHINESE}custom-git-bash-prompt`,
          },
        ],
      },
      {
        text: '其他',
        collapsed: false,
        items: [
          {
            text: '使用 LAN 共享文件',
            link: `${ROOT_PATH_CHINESE}lan-share`,
          },
          {
            text: '以不用 GUI 操作的方式启动有管理员权限的终端',
            link: `${ROOT_PATH_CHINESE}open-admin-terminal-without-gui`,
          },
        ],
      },
    ],

    [ROOT_PATH_JAPANESE]: [
      {
        text: 'プログラミング - 備忘録',
        items: [{ text: 'トップに戻る', link: '/ja/' }],
      },
      {
        text: 'Neovim',
        collapsed: false,
        items: [
          {
            text: 'Neovim でファイルの文字コードを変更する',
            link: `${ROOT_PATH_JAPANESE_NEOVIM}neovim-garbled-characters.md`,
          },
        ],
      },
      {
        text: 'Git',
        collapsed: false,
        items: [
          {
            text: 'git 原生コマンドで未アプロードのコミットを確認する',
            link: `${ROOT_PATH_JAPANESE_GIT}git-unpushed`,
          },
        ],
      },
      {
        text: 'パス修正',
        collapsed: false,
        items: [
          {
            text: 'Maven 依存パッケージインストール先の設定',
            link: `${ROOT_PATH_JAPANESE}maven-repository`,
          },
          {
            text: 'Rust | 更改 Windows Kits (SDK) 安装路径',
            link: `${ROOT_PATH_JAPANESE}rust-change-windows-kits-root`,
          },
        ],
      },
      {
        text: 'その他',
        collapsed: false,
        items: [
          {
            text: 'GUI を使わずに管理者権限のターミナルを開く',
            link: `${ROOT_PATH_JAPANESE}open-admin-terminal-without-gui`,
          },
        ],
      },
    ],
  }
}
