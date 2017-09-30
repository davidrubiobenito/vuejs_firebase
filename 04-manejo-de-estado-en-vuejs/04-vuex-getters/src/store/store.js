import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tareas :
        [
            {nombre: 'Aprender Vue Routing', completado: false},
            {nombre: 'Organizar leccionaes restantes', completado: true},
            {nombre: 'Grabar leccionaes mini curso ES6', completado: false},
            {nombre: 'Preparar landing page curso', completado: false},
            {nombre: 'Diseñar acciones de marketing', completado: false},
        ]
    },
    getters:
    {
        tareasCompletadas: (state) => {
            return state.tareas.filter((tarea) => tarea.completado).length;
        }
    }
});