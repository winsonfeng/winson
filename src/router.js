import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer'
import SearchContainer from './components/tabbar/SearchContainer'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: "mui-active",
    routes: [
        {
            path:'/',
            redirect:'/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/search',
            name: 'search',
            component: SearchContainer

        },
        {
            path: '/shopcar',
            name: 'shopcar'
        },
        {
            path: '/member',
            name: 'member',
            component: MemberContainer
        }
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home
        // },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // },

    ]
})
