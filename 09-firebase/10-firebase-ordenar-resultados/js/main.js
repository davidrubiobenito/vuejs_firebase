const gatosRef = db.ref('gatos');
const gatosVotosRef = db.ref('votos');

// Datos iniciales
const gatos = [
    {nombre: 'Rouco', edad: 6, color: 'blanco y negro'},
    {nombre: 'Mona', edad: 3, color: 'atrigrado'},
    {nombre: 'Mino', edad: 1, color: 'negro'},
    {nombre: 'Guizno', color: 'negro'},
];


new Vue({
    el: '#app',
    created(){
        gatos.forEach(gato => {
            gatosRef.child(gato.nombre).set({
                edad: gato.edad || null,
                color: gato.color
            });
        });

        gatos.forEach(gato => {
            gatosVotosRef.child(gato.nombre).set(
               Math.floor(Math.random() * 1000) + 0
            )
        });

        this.gatos.orderByChild('edad').on('child_moved', snapshot => {
            console.warn(snapshot.key, snapshot.val());
        });

    },
    data:{
        gatos: gatosRef,
    },
    methods :{
        ordenarPorKeySecundaria(key){
            this.gatos.orderByChild(key).on('child_added', snapshot => {
                console.log(snapshot.key, snapshot.val());
            })
        },
        ordenarPorKey(){
            this.gatos.orderByKey().on('child_added', snapshot => {
                console.log(snapshot.key, snapshot.val());
            })
        },
        ordenarPorValor(){
            gatosVotosRef.orderByValue().on('child_added', snapshot => {
                console.log(snapshot.key, snapshot.val());
            })
        },

    }
});


