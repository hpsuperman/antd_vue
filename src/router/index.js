import App from '../App'
export default [{
    path:'/',
    component: App,
    children:[
        {
            path:'/',
            component:()=>import ('@/view/login/login.vue'),
            meta: {  keepAlive: true  },// 需要被缓存
        },
        {
            path:'/login',
            name:'login',
            component:()=>import ('@/view/login/login.vue'),
        },
        {
            path:'/layout',
            name:'layout',
            component:()=>import("@/view/layout/layout.vue")
        },
        {
            path:'/home',
            name:'home',
            component:()=>import("@/page/home/home.vue")
        },
    ]
}]
