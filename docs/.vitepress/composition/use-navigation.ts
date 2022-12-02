import type { DefaultTheme } from 'vitepress'

export default function useNavigation(): DefaultTheme.NavItem[] {
  return [
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
