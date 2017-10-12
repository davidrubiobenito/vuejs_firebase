import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';
import EquipoDavid from './components/EquipoDavid.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/equipo', component: Equipo,
        children: [
            {path: 'david' , component: EquipoDavid},
        ]},
];