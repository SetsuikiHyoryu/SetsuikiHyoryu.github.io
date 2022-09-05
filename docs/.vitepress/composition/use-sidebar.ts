import type { DefaultTheme } from 'vitepress'

export default function useSidebar(): DefaultTheme.Sidebar {
  return {
    '/': [
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
            link: '/programming/source-manage-tool/',
          },
        ],
      },

      { text: '马克思主义', collapsible: true, items: [] },
    ],

    '/programming/source-manage-tool/': [
      {
        text: '资源管理工具',
        items: [{ text: '上一级', link: '../' }],
      },

      {
        text: 'Docker',
        collapsible: true,
        items: [
          {
            text: '以 Windows 为主运行开启 WSL2 功能的 docker',
            link: '/programming/source-manage-tool/docker/use-docker-with-wsl2',
          },
        ],
      },
    ],
  }
}
