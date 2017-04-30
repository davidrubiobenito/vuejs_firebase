
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
                    this.personas = respuesta.body.results;
                })
        }
    },
    computed:
    {

    }


});


