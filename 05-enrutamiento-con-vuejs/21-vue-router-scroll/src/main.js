import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import {store} from './store/store';
import {routes}  from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition){
        const position = {};

        console.log(to);
        if(to.hash) {
            position.selector = to.hash;
        }
        else{
            position.x = 200;
            position.y = 100;
        }
        return position;
    }
});

new Vue({
    el: '#app',
    store: store,
    router : router,
    render: h => h(App)
});
