
new Vue({
    el: '#app',
    created(){
        /*        db.ref('chats').push({
         mesaje: 'Hola, mundo ',
         username: 'davidwmedia'
         });*/

        const key = db.ref('chats').push().key;
        console.log('key ', key);

        db.ref('chats').child(key).set({
            mesaje: 'Hola, mundo, desde SET',
            username: 'davidwmedia'
        });

        db.ref('/perfiles').child('davidwmedia').child('chats').child(key)
            .set(true);

    },
    data:{

    },
    methods :{

    }
});


