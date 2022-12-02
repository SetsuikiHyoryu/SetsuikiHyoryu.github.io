import type { DefaultTheme } from 'vitepress'

export default function useSidebar(): DefaultTheme.Sidebar {
  return {
    ...useHomePageSidebar(),
    ...useProgrammingSourceManageToolSidebar(),
    ...useMarxismReadingNote(),
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
            text: 'ソース管理ツール',
            link: '/ja/programming/source-manage-tool/',
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

function useProgrammingSourceManageToolSidebar(): DefaultTheme.Sidebar {
  return {
    '/zh/programming/source-manage-tool/': [
      {
        text: '编程 - 资源管理工具',
        items: [{ text: '上一级', link: '/zh/' }],
      },

      {
        text: 'Docker',
        collapsible: true,
        items: [
          {
            text: '以 Windows 为主运行开启 WSL2 功能的 docker',
            link: '/zh/programming/source-manage-tool/docker/use-docker-with-wsl2',
          },
        ],
      },
    ],
  }
}

function useMarxismReadingNote(): DefaultTheme.Sidebar {
  return {
    '/zh/marxism/reading-note': [
      {
        text: '马克思主义 - 读书笔记',
        items: [{ text: '上一级', link: '/zh/' }],
      },
    ],

    '/ja/marxism/reading-note': [
      {
        text: 'マルクス主義 - 読書ノート',
        items: [{ text: '戻る', link: '/ja/' }],
      },
    ],
  }
}
