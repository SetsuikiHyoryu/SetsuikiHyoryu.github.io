import { DefaultTheme } from 'vitepress'

/** 编程 - 备忘录边栏 */
export function useCodingMemoSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH_CHINESE = '/zh/programming/coding-memo/'
  const ROOT_PATH_JAPANESE = '/ja/programming/coding-memo/'
  const ROOT_PATH_NEOVIM_CHINESE = '/zh/programming/coding-memo/neovim/'
  const ROOT_PATH_NUSHELL_CHINESE = '/zh/programming/coding-memo/nushell/'

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
            text: 'Neovim 修改文件文字编码',
            link: `${ROOT_PATH_NEOVIM_CHINESE}neovim-garbled-characters`,
          },
          {
            text: 'Neovim 0.10 内置折叠命令',
            link: `${ROOT_PATH_NEOVIM_CHINESE}neovim-fold-commands`,
          },
          {
            text: 'Neovim 全局替换',
            link: `${ROOT_PATH_NEOVIM_CHINESE}neovim-global-replace`,
          },
        ],
      },
      {
        text: 'Nushell',
        collapsed: false,
        items: [
          {
            text: 'Nushell 配置 fnm 使用 Node.js',
            link: `${ROOT_PATH_NUSHELL_CHINESE}nushell-fnm`,
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
        text: '版本管理',
        collapsed: false,
        items: [
          {
            text: 'git 原生命令查看未上传提交记录',
            link: `${ROOT_PATH_CHINESE}git-unpushed`,
          },
          {
            text: 'GitHub 多账户管理及匿名邮箱',
            link: `${ROOT_PATH_CHINESE}github-multiple-account`,
          },
          {
            text: '由被 fork 的仓库的用户修改 fork 分支',
            link: `${ROOT_PATH_CHINESE}fork-branch-changes-by-forked-repository-user`,
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
        ],
      },
    ],

    [ROOT_PATH_JAPANESE]: [
      {
        text: 'プログラミング - 備忘録',
        items: [{ text: 'トップに戻る', link: '/ja/' }],
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
            link: `${ROOT_PATH_JAPANESE}rust-change-windows-kits-root.md`,
          },
        ],
      },

      {
        text: 'バージョン管理',
        collapsed: false,
        items: [
          {
            text: 'git 原生コマンドで未アプロードのコミットを確認する',
            link: `${ROOT_PATH_JAPANESE}git-unpushed`,
          },
        ],
      },

      {
        text: 'その他',
        collapsed: false,
        items: [
          {
            text: 'Neovim でファイルの文字コードを変更する',
            link: `${ROOT_PATH_JAPANESE}neovim-garbled-characters.md`,
          },
        ],
      },
    ],
  }
}
