
new Vue({
    el: '#app',
    created(){
        db.ref('/perfiles')
            .child('davidwmedia')
            .on('value', snapshot => this.datosPerfil = snapshot.val());
    },
    data:{
        datosPerfil : []
    },
    methods :{
        actualizarLikes(){
            db.ref('/perfiles')
                .child('davidwmedia').child('likes')
                /*
                .update({
                    'likes' : this.datosPerfil.likes + 1,
                });
                */
                .transaction(function(likesActuales){
                    return likesActuales + 1;

                }, function(error, commited, snapshot){
                    if(error) {
                        console.error(error);
                    }
                    else if(!commited){
                        console.warn('Transaccción no realizada');
                    }
                    else {
                        console.info('Transacción realizada');
                        console.log(snapshot.val());
                    }
                });
        }
    }
});


