import type { HeadConfig } from 'vitepress'

export default function useHead(): HeadConfig[] {
  return [['link', { rel: 'icon', href: '/images/logo.png' }]]
}
