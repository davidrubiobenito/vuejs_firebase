
new Vue({
    el: '#app',
    created(){

        const chats = db.ref('chats');

        // child added
        //chats.on('child_added', (data) => console.log(data.val()));

        // child change
        //chats.on('child_changed', (data) => console.log(data.val()));

        // child remove
        chats.on('child_removed', (data) => console.log(data.val()));


    },
    data:{

    },
    methods :{

    }
});


