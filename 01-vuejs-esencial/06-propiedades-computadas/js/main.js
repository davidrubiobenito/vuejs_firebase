
const vm = new Vue({
    el: 'main',
    data:
    {
        mensaje: 'Hola mundo :) !',
        nuevaTarea: null,
        tareas:
        [
            {
                titulo : 'Aprender Vue.js',
                prioridad: true,
                antiguedad: 23
            },
            {
                titulo : 'Aprender ES6',
                prioridad: false,
                antiguedad: 135
            },
            {
                titulo : 'Publicar algo todoas los días',
                prioridad: true,
                antiguedad: 378
            }
        ]
    },
    methods:
    {
        agregarTarea()
        {

            // this, hace referencia a la instancia Vue
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = "";
        }
    },
    computed:
    {
        mensajeAlReves()
        {
            return this.mensaje.split('').reverse().join('');
        },
        tareasConPrioridad()
        {
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        tareasPorAntiguedad()
        {
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    }


});

// Vanilla Javascript

/*function agregarTarea() {
    const input = document.querySelector('input[type=text');
    vm.tareas.unshift(input.value);
    input.value = '';
}*/
