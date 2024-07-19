import type { DefaultTheme } from 'vitepress'

export function useHomepageSidebar(): DefaultTheme.Sidebar {
  return {
    '/zh/': zhSidebar(),
    '/ja/': jaSidebar(),
  }
}

const zhSidebar = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: '首页',
      items: [{ text: '简介', link: '/' }],
    },

    {
      text: '编程',
      items: [
        {
          text: '编程语言',
          link: '/zh/programming/language/javascript/fnm',
        },
        { text: '数据库', link: '/zh/programming/database/' },
        { text: '资源管理工具', link: '/zh/programming/source-manage-tool/' },
        {
          text: '备忘录',
          link: '/zh/programming/coding-memo/maven-repository',
        },
      ],
    },

    {
      text: '马克思主义',
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

    {
      text: '其他',
      collapsed: true,
      items: [
        {
          text: '护照更新流程',
          link: '/zh/other/passport-renewal',
        },
      ],
    },
  ]
}

const jaSidebar = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: 'トップ',
      items: [{ text: '概要', link: '/' }],
    },

    {
      text: 'プログラミング',
      items: [
        {
          text: 'プログラミング言語',
          link: '/ja/programming/language/',
        },
        {
          text: '試験準備',
          link: '/ja/programming/exam-preparation/',
        },

        {
          text: '備忘録',
          link: '/ja/programming/coding-memo/maven-repository',
        },
      ],
    },

    {
      text: 'マルクス主義',
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
  ]
}
