Vue.component('lista-tareas', {
    template: `
            <div>
                <h1><slot></slot></h1>
                <ul>
                    <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
                </ul>
            </div>  
        `,
    data(){
        return {
            tareas: [
                'Finalizar sección Componentes',
                'Iniciar workflow con Vue CLI y Webpack',
                'Terminar de estudiar la documentacion de Vuex',
                'Seguir Jugando con Vue Router y grabar el primer video',
            ]
        }
    }

});

Vue.component('tarea', {
    props:['tarea'],
    template: `<li> {{ tarea }}</li>`
});

Vue.component('contacto', {
    template: `<div><a href="mailito:drbotro@gmail.com">drbotro@gmail.com</a> <hr></div>`
});

Vue.component('bio', {
    template: `<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab molestiae quod rem repellendus sed velit. Ad alias at debitis ducimus ex, hic quos.</p></div>`
});


new Vue({
    el: 'main',
    data: {
        seleccionado : 'lista-tareas'
    }

});


