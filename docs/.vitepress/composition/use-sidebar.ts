import type { DefaultTheme } from 'vitepress'

export default function useSidebar(): DefaultTheme.Sidebar {
  return {
    ...useHomePageSidebar(),

    // 编程
    ...useProgrammingLanguageSidebar(),
    ...useDatabaseSidebar(),
    ...useProgrammingSourceManageToolSidebar(),

    // 马克思主义
    ...useMarxismReadingNoteSidebar(),
    ...useMarxismReadingReportSidebar(),
  }
}

function useHomePageSidebar(): DefaultTheme.Sidebar {
  return {
    '/zh/': [
      {
        text: '首页',
        items: [{ text: '简介', link: '/' }],
      },

      {
        text: '编程',
        collapsible: true,
        items: [
          {
            text: '编程语言',
            link: '/zh/programming/language/',
          },

          {
            text: '数据库',
            link: '/zh/programming/database/',
          },

          {
            text: '资源管理工具',
            link: '/zh/programming/source-manage-tool/',
          },
        ],
      },

      {
        text: '马克思主义',
        collapsible: true,
        items: [
          {
            text: '读书笔记',
            link: '/zh/marxism/reading-note/',
          },

          {
            text: '读书报告',
            link: '/zh/marxism/reading-report/',
          },
        ],
      },
    ],

    '/ja/': [
      {
        text: 'トップ',
        items: [{ text: '概要', link: '/' }],
      },

      {
        text: 'プログラミング',
        collapsible: true,
        items: [
          {
            text: 'プログラミング言語',
            link: '/ja/programming/language/',
          },
        ],
      },

      {
        text: 'マルクス主義',
        collapsible: true,
        items: [
          {
            text: '読書ノート',
            link: '/ja/marxism/reading-note/',
          },

          {
            text: '読書レポート',
            link: '/ja/marxism/reading-report/',
          },
        ],
      },
    ],
  }
}

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
        collapsible: true,
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
        collapsible: true,
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

function useDatabaseSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH_CHINESE = '/zh/programming/database/'

  return {
    [ROOT_PATH_CHINESE]: [
      {
        text: '编程 - 数据库',
        items: [
          { text: '回到首页', link: '/zh/' },
          { text: '数据库目录', link: ROOT_PATH_CHINESE },
        ],
      },

      {
        text: 'MySQL',
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: '在 Docker 上使用 MySQL',
            link: `${ROOT_PATH_CHINESE}mysql/use-mysql-on-docker`,
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
        collapsible: true,
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
        collapsible: true,
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
