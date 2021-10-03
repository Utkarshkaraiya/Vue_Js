import Category from '../components/Category.vue'
import DetailPage from '../components/DetailPage.vue'

import {createRouter,createWebHistory} from 'vue-router'



const routes = [
    // {
    //     name:'DetailPage',
    //     component:DetailPage,
    //     path:'/DetailPage'
    // },
    // {
    //     name:'Signup',
    //     component:Signup,
    //     path:'/sign-up'
    // },
    // {
    //     name:'Login',
    //     component:Login,
    //     path:'/login'
    // },
    {
        name:'Category',
        component:Category,
        path: "/category/:category",
        props:true
    },
    {
        name:'DetailPage',
        component:DetailPage,
        path:"/category/:category/:id",
        props:true
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router ;