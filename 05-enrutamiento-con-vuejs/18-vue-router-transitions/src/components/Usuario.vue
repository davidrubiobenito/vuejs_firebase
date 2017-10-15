<template>
    <section>
        <h1>El identificador es: {{ $route.params.id }}</h1>
        <h2>David Rubio</h2>
        <h5>davidrubiobenito@gmail.com</h5>
    </section>
</template>

<script>
    export default {
        beforeRouteEnter : ((to, from, next) => {
            console.log('Antes de entrar');
            next((vm) => console.log(vm));
        }),
        beforeRouteUpdate : ((to, from, next) => {
            console.log('Antes de cambiar la ruta sobre el mismo componente');
            console.log(this);
            next();
        }),
        beforeRouteLeave : ((to, from, next) => {
            console.log('Antes de salir');
            next();
        })
    }
</script>
