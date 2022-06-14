import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Rtty from '../views/Rtty.vue'
import gtagjs from 'vue-gtagjs'
import Zoho from '../plugins/zoho'

Vue.use(VueRouter)
    // Vue.use(Zoho)
new Zoho()

const routes = [{
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/rtty/:devid',
        name: 'Rtty',
        component: Rtty,
        props: true
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


gtagjs(router, 'UA-107297819-1', { 'anonymize_ip': true, debug: true, scriptId: 'gtagjs' })

// window.gtag('set', 'linker', { 'domains': ['www.mixtile.com'] });
// window.gtag('set', 'developer_id.dZTNiMT', true);


router.beforeEach((to, from, next) => {
    if (to.matched.length > 0 && to.matched[0].path === '/rtty/:devid') {
        const devid = to.params['devid'];
        Vue.axios.get(`/authorized/${devid}`).then(r => {
            if (r.data.authorized)
                next();
            else
                router.push('/login');
        });
        return;
    }

    if (to.path !== '/login') {
        Vue.axios.get('/alive').then(() => {
            next();
        }).catch(() => {
            router.push('/login');
        });
    } else {
        next();
    }
})

export default router