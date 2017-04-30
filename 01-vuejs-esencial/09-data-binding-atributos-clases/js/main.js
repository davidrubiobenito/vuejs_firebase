
const vm = new Vue({
    el: 'main',
    data:
    {
        mensaje: "Tareas",
        tareas: [
            {"titulo": "Hacer la compra", "completado": false},
            {"titulo": "Aprender Vue.js", "completado": false},
            {"titulo": "Aprender FireBase", "completado": false},
            {"titulo": "Dominar ES6", "completado": false},
            {"titulo": "Salir a correr", "completado": false},

        ]
    },
    beforeUpdate(){

    },
    updated(){

    },
    methods:
    {
        completarTarea(tarea){
            tarea.completado = !tarea.completado;
        }
    },
    computed:
    {
        tareasCompletadas(){
            return this.tareas.filter((tarea) => tarea.completado);
        }
    }


});


