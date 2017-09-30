
Vue.component('autor', {
    props: ['nombre', 'edad'],
    mounted() {
        // LAs props son accesibles desde this(proxy)
        console.log(this.nombre);
        console.log(typeof this.edad);
    },
    template:   `
                <div>
                    <h1>{{ nombre }}</h1>
                    <button @click="cambiarProps">Cambiar Props</button>
                </div>
                `,
    methods: {
        cambiarProps() {
            this.nombre = this.nombre.toUpperCase();
        }
    }

});

new Vue({
    el: 'main',
    data: {
        autor : 'David Rubio'
    }


});


