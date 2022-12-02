import type { DefaultTheme } from 'vitepress'

export function useChineseNavigation(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/zh/' },

    {
      text: '文章',
      items: [
        {
          text: '编程',
          items: [
            {
              text: '资源管理工具',
              link: '/zh/programming/source-manage-tool/',
            },
          ],
        },

        { text: '马克思主义', items: [] },
      ],
    },
  ]
}

export function useJapaneseNavigation(): DefaultTheme.NavItem[] {
  return [
    { text: 'トップ', link: '/ja/' },

    {
      text: '文章',
      items: [
        {
          text: 'プログラミング',
          items: [
            {
              text: 'ソース管理ツール',
              link: '/ja/programming/source-manage-tool/',
            },
          ],
        },

        { text: 'マルクス主義', items: [] },
      ],
    },
  ]
}
