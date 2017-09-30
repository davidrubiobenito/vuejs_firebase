<template>
    <section>
        <h1>Cantidad: {{cantidad}} </h1>
        <button @click="aumentarAsync(12)">Aumentar</button>
        <button @click="reducirAsync({cantidad: 15})">Reducir</button>
    </section>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex';
    export default {
        computed: mapState (['cantidad']),
        //methods: mapMutations(['aumentar' ,'reducir']),
        methods: mapActions(['aumentarAsync' ,'reducirAsync']),
       /* methods: {
            aumentar(){
                //this.$store.state.cantidad++;
                //this.$store.commit('aumentar');
                this.$store.dispatch('aumentarAsync');
            },
            reducir(){
                //this.$store.state.cantidad--;
                //this.$store.commit('reducir');
                this.$store.dispatch('reducirAsync');
            }
        }*/
    }
</script>

<style>

</style>
