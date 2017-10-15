import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import {store} from './store/store';
import {routes}  from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
});

router.beforeEach((to , from, next) => {
    console.log('Accedo global a ruta');

    if(to.meta.privado)
        next(store.state.auth);
    else
        next();
});

new Vue({
    el: '#app',
    store: store,
    router : router,
    render: h => h(App)
});
