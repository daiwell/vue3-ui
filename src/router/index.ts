import {createWebHashHistory,createRouter} from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

const routes=[
    {
        path:'/home',
        name:'home',
        component:Home
    },
    {
        path:'/about',
        name:'about',
        component:About
    }
]
export default createRouter({
    history:createWebHashHistory(),
    routes
})