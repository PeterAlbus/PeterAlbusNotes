module.exports = {
    title: 'PeterAlbus的笔记本',
    description: '大学期间相关课程的知识点汇总和复习资料',
    themeConfig: {
      nav: [
        { text: '主页', link: '/' },
        { text: '操作系统', link: '/ComputerOS.md' },
        { text: '计算机组成原理', link: '/ComputerOrganization.md' },
        { text: '计算机网络', link: '/ComputerNetwork.md' },
        {
            text: '其他',
            ariaLabel: '其余笔记链接',
            items: [
              { text: '软件工程', link: '/SoftwareEngineering.md' },
              { text: '数据库', link: '/Database.md' },
              { text: '算法基础', link: '/FundamentalsOfAlgorithmics.md' },
              { text: '数学建模', link: '/MathematicalModeling.md' },
              { text: '汇编', link: '/AssemblyLanguage.md' }
            ]
        },
        { text: 'Github', link: 'https://github.com/PeterAlbus/PeterAlbusNotes' },
      ],
      sidebarDepth: 2,
      sidebar: 'auto'
    }
  }