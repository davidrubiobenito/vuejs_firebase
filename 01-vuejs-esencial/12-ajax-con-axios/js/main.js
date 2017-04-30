Vue.prototype.$http = axios;


const vm = new Vue({
    el: 'main',
    data:
    {
        personas: []
    },
    beforeUpdate(){

    },
    updated(){

    },
    mounted() {
        console.log('Instancia montada');
        this.cargarPersonas();
    },
    methods:
    {
        cargarPersonas(){

            this.$http.get('https://randomuser.me/api/?results=500')
             .then(respuesta => {
                this.personas = respuesta.data.results;
             });

      /*      axios.get('https://randomuser.me/api/?results=500')
                .then((respuesta) => {
                    console.log(respuesta);
                    this.personas = respuesta.data.results;
                });*/
        }
    },
    computed:
    {

    }


});


