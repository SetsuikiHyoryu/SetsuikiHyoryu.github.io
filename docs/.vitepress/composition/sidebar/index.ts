import type { DefaultTheme } from 'vitepress'
import { useDatabaseSidebar } from './database'
import { useHomepageSidebar } from './homepage'

export default function useSidebar(): DefaultTheme.Sidebar {
  return {
    ...useHomepageSidebar(),

    // 编程
    ...useProgrammingLanguageSidebar(),
    ...useDatabaseSidebar(),
    ...useProgrammingSourceManageToolSidebar(),
    ...useCodingMemoSidebar(),
    ...useExamPreparationSidebar(),

    // 马克思主义
    ...useMarxismReadingNoteSidebar(),
    ...useMarxismReadingReportSidebar(),
  }
}

/** 编程语言边栏 */
function useProgrammingLanguageSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH_CHINESE = '/zh/programming/language/'
  const ROOT_PATH_JAPANESE = '/ja/programming/language/'

  return {
    [ROOT_PATH_CHINESE]: [
      {
        text: '编程 - 编程语言',
        items: [
          { text: '回到首页', link: '/zh/' },
          { text: '编程语言目录', link: ROOT_PATH_CHINESE },
        ],
      },

      {
        text: 'C#',
        collapsed: false,
        items: [
          {
            text: '命令行单元测试 C#（xUnit）',
            link: `${ROOT_PATH_CHINESE}c-sharp/c-sharp_unit-test_command-line`,
          },
        ],
      },
    ],

    [ROOT_PATH_JAPANESE]: [
      {
        text: 'プログラミング - プログラミング言語',
        items: [
          { text: 'トップに戻る', link: '/ja/' },
          { text: 'プログラミング言語目録', link: ROOT_PATH_JAPANESE },
        ],
      },

      {
        text: 'C#',
        collapsed: false,
        items: [
          {
            text: 'コマンドラインで C# を単体テスト（xUnit）',
            link: `${ROOT_PATH_JAPANESE}c-sharp/c-sharp_unit-test_command-line`,
          },
        ],
      },
    ],
  }
}

function useProgrammingSourceManageToolSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH_CHINESE = '/zh/programming/source-manage-tool/'

  return {
    [ROOT_PATH_CHINESE]: [
      {
        text: '编程 - 资源管理工具',
        items: [
          { text: '回到首页', link: '/zh/' },
          { text: '资源管理工具目录', link: `${ROOT_PATH_CHINESE}` },
        ],
      },

      {
        text: 'Docker',
        items: [
          {
            text: '以 Windows 为主运行开启 WSL2 功能的 docker',
            link: `${ROOT_PATH_CHINESE}docker/use-docker-with-wsl2`,
          },
        ],
      },
    ],
  }
}

/** 编程 - 备忘录边栏 */
function useCodingMemoSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH_CHINESE = '/zh/programming/coding-memo/'
  const ROOT_PATH_JAPANESE = '/ja/programming/coding-memo/'

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
            link: `${ROOT_PATH_CHINESE}neovim-garbled-characters`,
          },
          {
            text: 'Neovim 0.10 内置折叠命令',
            link: `${ROOT_PATH_CHINESE}neovim-fold-commands`,
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
            text: 'GitHub 多账户管理及匿名邮箱',
            link: `${ROOT_PATH_CHINESE}github-multiple-account`,
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

function useMarxismReadingNoteSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH_CHINESE = '/zh/marxism/reading-note/'
  const ROOT_PATH_JAPANESE = '/ja/marxism/reading-note/'

  return {
    [ROOT_PATH_CHINESE]: [
      {
        text: '马克思主义 - 读书笔记',
        items: [
          { text: '回到首页', link: '/zh/' },
          { text: '读书笔记目录', link: ROOT_PATH_CHINESE },
        ],
      },

      {
        text: '列宁',
        collapsed: false,
        items: [
          {
            text: '国家与革命',
            link: `${ROOT_PATH_CHINESE}lenin/the-state-and-revolution`,
          },
        ],
      },
    ],

    [ROOT_PATH_JAPANESE]: [
      {
        text: 'マルクス主義 - 読書ノート',
        items: [
          { text: 'トップに戻る', link: '/ja/' },
          { text: '読書ノート目録', link: ROOT_PATH_JAPANESE },
        ],
      },
    ],
  }
}

function useMarxismReadingReportSidebar(): DefaultTheme.Sidebar {
  return {
    '/zh/marxism/reading-report': [
      {
        text: '马克思主义 - 读书报告',
        items: [{ text: '上一级', link: '/zh/' }],
      },
    ],

    '/ja/marxism/reading-report': [
      {
        text: 'マルクス主義 - 読書レポート',
        items: [{ text: '戻る', link: '/ja/' }],
      },
    ],
  }
}

/**
 * @description 考试准备边栏
 */
function useExamPreparationSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH_CHINESE = '/zh/programming/exam-preparation/'
  const ROOT_PATH_JAPANESE = '/ja/programming/exam-preparation/'

  return {
    [ROOT_PATH_CHINESE]: [
      {
        text: '编程 - 考试准备',
        items: [
          { text: '回到首页', link: '/zh/' },
          { text: '考前准备目录', link: ROOT_PATH_CHINESE },
        ],
      },

      {
        text: 'Sample',
        collapsed: false,
        items: [
          {
            text: 'SampleItem',
            link: `${ROOT_PATH_CHINESE}c-sharp/c-sharp_unit-test_command-line`,
          },
        ],
      },
    ],

    [ROOT_PATH_JAPANESE]: [
      {
        text: 'プログラミング - 試験準備',
        items: [
          { text: 'トップに戻る', link: '/ja/' },
          { text: '試験準備', link: ROOT_PATH_JAPANESE },
        ],
      },

      {
        text: 'IT パスポート',
        collapsed: false,
        items: [
          {
            text: '学習計画',
            link: `${ROOT_PATH_JAPANESE}it-passport/study-project`,
          },
        ],
      },
    ],
  }
}
