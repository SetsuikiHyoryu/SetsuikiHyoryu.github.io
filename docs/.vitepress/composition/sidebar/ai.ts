import { DefaultTheme } from 'vitepress'

export function useAISidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH_CHINESE = '/zh/programming/ai/'
  const ROOT_PATH_JAPANESE = '/ja/programming/ai/'

  return {
    [ROOT_PATH_CHINESE]: [
      {
        text: '编程 - 编程语言',
        items: [{ text: '回到首页', link: '/zh/' }],
      },

      {
        text: 'AI 编程',
        collapsed: false,
        items: [
          {
            text: 'AI 编程备忘录',
            link: `${ROOT_PATH_CHINESE}ai-coding/memoration`,
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
        text: 'AI コーディング',
        collapsed: false,
        items: [
          {
            text: 'AI コーディング備忘録',
            link: `${ROOT_PATH_CHINESE}ai-coding/memoration`,
          },
        ],
      },
    ],
  }
}
