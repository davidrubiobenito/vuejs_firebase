
const vm = new Vue({
    el: 'main',
    data: {
        nombre: 'David',
        laborales: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
        tareas: [
            {nombre: 'Hacer la compra', prioridad: 'baja'},
            {nombre: 'Aprender Vue y Firebase', prioridad: 'alta'},
            {nombre: 'Ir al gimnasio', prioridad: 'alta'}
        ],
        persona: {
            nombre: 'Belén',
            profesion: 'Atención al público',
            ciudad: 'Nuevo Baztán'
        }
    }
});