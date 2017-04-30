
// Los filtros se definen antes que el objeto Vue

Vue.filter('alReves', (valor) => valor.split('').reverse().join(''));

const vm = new Vue({
    el: 'main',
    data:
    {
        busqueda: '',
        minimo: 5,
        juegos:
        [
            {
                titulo : 'Battletfield 1',
                genero: 'FPS',
                puntuacion: 9
            },
            {
                titulo : 'Civilization VI',
                genero: 'Estrategia',
                puntuacion: 10
            },
            {
                titulo : 'Resident Evil 7',
                genero: 'Terror',
                puntuacion: 7
            }
        ]
    },
    methods:
    {

    },
    computed:
    {
        mejoresJuegos(){
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
        },
        buscarJuego(){
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
        }
    }


});

// Vanilla Javascript

/*function agregarTarea() {
    const input = document.querySelector('input[type=text');
    vm.tareas.unshift(input.value);
    input.value = '';
}*/
