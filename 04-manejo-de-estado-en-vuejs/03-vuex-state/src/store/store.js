import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        nombre : 'David',
        apellidos : 'Rubio Benito',
        profesion: 'Developer',
        ciudad: 'Madrid',
    }
});