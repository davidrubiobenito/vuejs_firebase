<template>

    <div>
        <elemento tipo="header">Soy el header</elemento>
        <elemento tipo="nav">Soy la Nav</elemento>
        <elemento tipo="footer">Footer</elemento>
        <elemento tipo="main">Hola Main</elemento>
    </div>

</template>

<script>
    import elemento from './components/Elemento.vue';
    export default
    {
        components: { elemento },
        data(){
            return {

            }
        }
    }
</script>

<style>

</style>
