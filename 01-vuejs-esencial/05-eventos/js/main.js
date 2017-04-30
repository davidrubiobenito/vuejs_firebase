
const vm = new Vue({
    el: 'main',
    data:
    {

        nuevaTarea: "",
        tareas: [
            'Aprender Vue.js',
            'Aprender ES6',
            'Puclicar algo todos los días'
        ]
    },
    methods:
    {
        agregarTarea() {

            // this, hace referencia a la instancia Vue
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = "";
        }
    }


});

// Vanilla Javascript

/*function agregarTarea() {
    const input = document.querySelector('input[type=text');
    vm.tareas.unshift(input.value);
    input.value = '';
}*/
