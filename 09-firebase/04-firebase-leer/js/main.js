
new Vue({
    el: '#app',
    created(){
        db.ref('/chats')
            .on('value', snapshot => this.cargarMensajes(snapshot.val()));
    },
    data:{
        mensaje: null,
        username: 'davidwmedia',
        mensajes: [],
    },
    methods :{
        enviarMensaje(){
            db.ref('/chats')
                .push({
                   mensaje: this.mensaje,
                    username: this.username,
                })
                .then((data) => {
                    this.mensaje= '';
                    console.log(data.key);
                });
        },
        cargarMensajes(mensajes){
            this.mensajes= [];
            for (let key in mensajes) {
                this.mensajes.push({
                    mensaje: mensajes[key].mensaje,
                    username: mensajes[key].username,
                })
            }

            this.mensajes.reverse();
        },
    }
});


