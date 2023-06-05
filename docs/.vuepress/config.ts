import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import { 
  head, 
  navbarEn, 
  navbarZh, 
  sidebarEn, 
  sidebarZh 
} from './configs/index.ts'

export default defineUserConfig({
  
  base: '/',

  head,

  locales: {
    '/': {
      lang: 'en-US',
      title: "VuePress",
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    }
  },

  theme: defaultTheme({
    logo: '/images/hero.png',

    locales: {
      '/': {
        navbar: navbarEn,
        sidebar: sidebarEn
      },
      '/zh/': {
        navbar: navbarZh,
        sidebar: sidebarZh,

        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',

        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      }
    }
  })

})
