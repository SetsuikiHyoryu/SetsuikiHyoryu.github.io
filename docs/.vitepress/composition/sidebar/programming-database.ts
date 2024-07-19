import { DefaultTheme } from 'vitepress'

export const useDatabaseSidebar = (): DefaultTheme.Sidebar => {
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
        text: 'SQLite',
        collapsed: false,
        items: [
          {
            text: '安装 SQLite',
            link: `${ROOT_PATH_CHINESE}sqlite/installation`,
          },
        ],
      },
      {
        text: 'MySQL',
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
