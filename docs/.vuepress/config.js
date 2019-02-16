module.exports = {
  base: '/base-component/',
  title: 'base',
  description: '基于 Vue 的基础 UI 组件库',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开始', link: '/get-started/' }
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/get-started/',
          '/install/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/collapse',
          // '/components/layout',
          '/components/popover',
          '/components/tab',
          '/components/toast',
          '/components/slides',
        ]
      }
    ]
  }
}