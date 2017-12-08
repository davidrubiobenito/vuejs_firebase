const gatosRef = db.ref('gatos');

new Vue({
    el: '#app',
    created(){
        this.ordenarPorKeySecundaria('edad');
    },
    data:{
        gatos: gatosRef,
    },
    methods :{
        ordenarPorKeySecundaria(key){
            this.gatos
                .orderByChild(key)
                //.limitToFirst(2)
                //.limitToLast(1)
                //.startAt(5)
                //.endAt(6)
                .equalTo(3)
                .on('child_added', snapshot => {
                console.log(snapshot.key, snapshot.val());
            });
        },

    }
});


