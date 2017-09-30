Vue.component('lista-tareas', {
    props: ['tareas'],
    template: `
            <div>
                <h1><slot></slot></h1>
                <ul>
                    <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
                </ul>
            </div>  
        `
});

Vue.component('tarea', {
    props:['tarea'],
    template: `<li> {{ tarea }}</li>`
});


new Vue({
    el: 'main',
    data:{
        tareas: [
            'Finalizar sección Componentes',
            'Iniciar workflow con Vue CLI y Webpack',
            'Terminar de estudiar la documentacion de Vuex',
            'Seguir Jugando con Vue Router y grabar el primer video',
        ]
    }

});


