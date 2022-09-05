import { defineConfig } from 'vitepress'
import { useNavigation, useSidebar } from './composition'

export default defineConfig({
  base: '/next/',
  lang: 'zh-CN',
  title: '冰龍與雪風的工作室',
  description: '冰龍與雪風的博客',
  appearance: 'dark', // 外观
  lastUpdated: true,

  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    logo: '/images/logo.png',
    nav: useNavigation(),
    sidebar: useSidebar(),
  },
})
