import type { DefaultTheme } from 'vitepress'

import { useHomepageSidebar } from './homepage'
import { useProgrammingLanguageSidebar } from './programming-language'
import { useDatabaseSidebar } from './programming-database'
import { useCodingMemoSidebar } from './coding-memo'

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
