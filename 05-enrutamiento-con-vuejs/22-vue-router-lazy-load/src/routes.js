import Info from './components/Informacion.vue';
// import Bio from './components/Biografia.vue';

import NoEncontrado from './components/NoEncontrado.vue';

import {store} from './store/store';

// lazy load del componente BIO
const Bio = resolve => {
    require.ensure(['./components/Biografia.vue'], () => {
        resolve(require('./components/Biografia.vue'));
    });
};

export const routes = [
    {path: '/', component: Info},
    {path: '/bio', component: Bio},

    // Siempre ponerla al final
    {path: '/*/', component: NoEncontrado} ,


];