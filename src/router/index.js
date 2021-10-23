import VueRouter from "vue-router";

import Store from "@/components/Store";
import LoginForm from "@/components/LoginForm";

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: LoginForm
        },
        {
            path: '/store',
            component: Store
        }
    ]
})