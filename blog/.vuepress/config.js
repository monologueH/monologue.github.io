module.exports = {
  title: 'zhouhannan\'s blog',  // 设置网站标题
  description: 'zhouhannan\'s blog',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
  ],
  base: '/',
  themeConfig: {
    nav: [
      { text: '博客首页', link: '/' }
    ],
    sidebar: [
      {
        title: '最新文章',
        collapsable: true,
        children: [
          '/articles/科学上网.md'
        ]
      }
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  }
}