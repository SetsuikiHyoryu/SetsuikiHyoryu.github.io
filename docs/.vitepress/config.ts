import { defineConfig } from 'vitepress'
import { useNavigation, useSidebar } from './composition'

export default defineConfig({
  base: '/',
  srcDir: './source', // relative to project root(vitepress-blog/docs/).
  lang: 'zh-CN',
  title: '冰龍與雪風的工作室',
  description: '冰龍與雪風的博客',
  appearance: 'dark', // 外观
  lastUpdated: true,

  markdown: {
    lineNumbers: true,
  },

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '冰龍與雪風的工作室',
      description: '冰龍與雪風的博客',
    },

    '/ja/': {
      lang: 'ja',
      title: '冰龍と雪風のアトリエ',
      description: '冰龍と雪風のブログ',
    },
  },

  themeConfig: {
    logo: '/images/logo.png',

    localeLinks: {
      text: 'Language',
      items: [
        { text: '中文', link: '/' },
        { text: '日本語', link: '/ja/' },
      ],
    },

    nav: useNavigation(),
    sidebar: useSidebar(),
  },
})
