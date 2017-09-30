<template>
    <h1>Hola me llamo {{nombre}} {{apellidos}} y me dedico a {{profesion}}</h1>
</template>

<script>

    import {mapState} from 'vuex';

    export default
    {
        /*computed: {
            nombre() {
                return this.$store.state.nombre;
            }
        }*/

       /* computed: mapState({
            /!*nombre: function (state) {
                return state.nombre;
            }*!/
            nombre: (state) => state.nombre,
            apellidos: (state) => state.apellidos,
            profesion: (state) => state.profesion,
            ciudad: (state) => state.ciudad,
        })*/

        computed: mapState(['nombre', 'apellidos', 'profesion'])
    }
</script>

<style>

</style>
