
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
                    key: key,
                })
            }
            this.mensajes.reverse();
        },
        editarMensaje(mensaje, key){
          console.log(mensaje.target.innerHTML , key);
          db.ref('/chats/' + key)
              .update({
                 mensaje: mensaje.target.innerHTML,
              });
        },
        eliminarMensaje(key){
            if(confirm('¿Seguro?')){
                db.ref('/chats/' + key)
                    .remove();
            }
        },
    }
});


