
new Vue({
    el: '#app',
    data:{
       formulario: null,
    },
    methods :{
        enviar(){
            console.info(typeof this.formulario);
        }
    }
});


