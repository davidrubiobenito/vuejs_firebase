
new Vue({
    el: '#app',
    data:{
        criterios: {
            nombre: null,
            apellidos: null,
            consulta: null,
            cliente: null,
            conocio: 'Internet',
            acepta: null

        },
        conocio: [
            'Amigo o familiar',
            'Internet',
            'TV o radio'
        ]
    },
    methods :{
        enviar(){
            for (let key in this.criterios){
                console.log(`${key} : ${this.criterios[key]}`);
            }
        }
    }
});


