<template>
    <div>
        <h1>Aprender 2017-2018</h1>
        <form @submit.prevent="agregarTecnologia">
            <input type="text" placeholder="Tecnología a aprender" v-model="nuevaTecnologia">
        </form>

        <ul>
            <li v-for="tecnologia in aprender">
                {{ tecnologia.nombre }}
            </li>
        </ul>
    </div>
</template>

<script>

    import {mixin} from './mixins';

    export default {
        mixins: [mixin],
    }

</script>

<style>

</style>
