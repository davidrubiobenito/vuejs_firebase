
Vue.component('candidato', {
    // props: ['nombre', 'correoe','imagen'],
    props: {
        nombre: {
            type: [String, Array], // null = *
            required: true,
        },
        correoe: {
            type: String,
            default: 'davidrubiobenito@gmail.com',
        },
        imagen: String,
        location: {
            type: Object,
            default(){
                return {ciudad: 'Madrid'}
            }
        },
    },
    template:   '#candidato-template',
    methods: {
        cambiarProps() {
            this.nombre = this.nombre.toUpperCase();
        }
    }

});

new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos : []
    },
    methods: {
        obtenerCandidatos(){
            axios.get('https://randomuser.me/api/?results=100')
                .then((respuesta) => {
                    this.candidatos = respuesta.data.results;
                });
        }
    }


});


