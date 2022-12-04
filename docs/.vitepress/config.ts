import type { DefaultTheme } from 'vitepress'
import type { CustomTheme } from '../types'

import { defineConfigWithTheme } from 'vitepress'
import {
  useSidebar,
  useHead,
  useJapaneseNavigation,
  useChineseNavigation,
} from './composition'
import { bilibili } from './theme/icons'

/**
 * NOTE: Need use defineConfig when i18n type fixed,
 * defineConfigwithTheme is used with custom theme.
 * */
export default defineConfigWithTheme<DefaultTheme.Config & CustomTheme.Config>({
  base: '/',
  srcDir: './source', // relative to project root(vitepress-blog/docs/).
  lang: 'zh-CN',
  title: '冰龍與雪風的工作室',
  description: '冰龍與雪風的博客',
  head: useHead(),
  appearance: 'dark', // 外观
  lastUpdated: true,

  markdown: {
    lineNumbers: true,
  },

  locales: {
    '/zh/': {
      lang: 'zh-CN',
      label: '中文',
      title: '冰龍與雪風的工作室',
      description: '冰龍與雪風的博客',
    },

    '/ja/': {
      lang: 'ja',
      label: '日本語',
      title: '冰龍と雪風のアトリエ',
      description: '冰龍と雪風のブログ',
    },
  },

  themeConfig: {
    logo: '/images/logo.png',

    locales: {
      '/zh/': {
        // editLinkText,
        // lastUpdated,
        nav: useChineseNavigation(),
      },

      '/ja/': {
        nav: useJapaneseNavigation(),
      },
    },

    localeLinks: {
      text: 'Language',
      items: [
        { text: '中文', link: '/zh/' },
        { text: '日本語', link: '/ja/' },
      ],
    },

    sidebar: useSidebar(),

    socialLinks: [
      {
        icon: { svg: bilibili },
        link: 'https://space.bilibili.com/262993',
      },

      { icon: 'twitter', link: 'https://twitter.com/Setsuiki_Hyoryu' },

      {
        icon: 'youtube',
        link: 'https://www.youtube.com/channel/UCUeg9mYxtAp3ZqHfahPAPbQ/featured',
      },

      {
        icon: 'github',
        link: 'https://github.com/SetsuikiHyoryu/SetsuikiHyoryu.github.io',
      },
    ],
  },
})
