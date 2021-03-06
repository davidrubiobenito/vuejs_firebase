import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import {store} from './store/store';
import {routes}  from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

router.beforeEach((to , from, next) => {
    console.log('Accedo a ruta');
    next(store.state.auth);
});

new Vue({
    el: '#app',
    store: store,
    router : router,
    render: h => h(App)
});
