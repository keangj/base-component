module.exports = {
  title: 'base components',
  description: '基于 Vue 的基础 UI 组件库',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开始', link: '/get-started/' }
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/get-started/',
          '/install/'
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button'
        ]
      }
    ]
  }
}