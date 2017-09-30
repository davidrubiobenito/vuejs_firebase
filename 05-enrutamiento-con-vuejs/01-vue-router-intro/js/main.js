// ¿Quien 'vive en cada ruta?

const home = Vue.component('Home', {
    template : '<h2>Portada</h2>'
});

const contacto = Vue.component('Contacto', {
    template : '<h2>Contacto</h2>'
});


// Plano de destinos con las subrutas
const routes = [
    {path: '/' , component: home},
    {path: '/contacto' , component: contacto},
];


// Instanciar el componente enroutador
const router = new VueRouter({
    routes: routes
});

new Vue({
    router:router,
    el: '#app',

});


