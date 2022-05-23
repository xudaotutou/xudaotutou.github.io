import { defineUserConfig, defaultTheme } from "vuepress"

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress!',
  description: '这是我的第一个 VuePress 站点',
  dest:'public',
  base:'/public',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'yarn配置坑',
        link: '/caikeng/configyarn2',
      },
    ],
  }),
})

