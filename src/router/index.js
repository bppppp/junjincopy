import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/hot'
}, {
    path: '/hot',
    name: 'hot',
    component: () =>
        import ('views/hot/hot.vue')
}, {
    path: '/newest',
    name: 'newest',
    component: () =>
        import ('views/newest/newest.vue')
}, {
    path: '/history',
    name: 'history',
    component: () =>
        import ('views/history/history.vue')
}, {
    path: '/detail',
    name: 'detail',
    component: () =>
        import ('views/detail/articleDetail.vue'),

}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router