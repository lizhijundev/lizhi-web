
export default defineAppConfig({
    blogNav: [
        { name:'index', title:'首页', url: '/', icon: 'i-heroicons-home-20-solid' },
        { name:'archives', title: '归档', url: '', icon: 'i-heroicons-archive-box-20-solid' },
        { name:'categories', title:'分类', url: '', icon: 'i-heroicons-bookmark-square-20-solid' },
        { name:'tags', title: '标签', url: '', icon: 'i-heroicons-bookmark-20-solid' },
        { name:'about', title:'关于', url: '/about', icon: 'i-heroicons-identification-20-solid' },
        { name:'dev', title:'开发测试', url: '/dev', icon: 'i-heroicons-wrench-20-solid' },
    ],
    linkNav: [
        { name:'github', title:'Github', url: '', icon: 'i-uil-github' },
        { name:'wx_mp', title: '微信公众号', url: '', icon: 'simple-icons:wechat' },
        { name:'weibo', title:'微博', url: '', icon: 'simple-icons:sinaweibo' },
    ]
})
