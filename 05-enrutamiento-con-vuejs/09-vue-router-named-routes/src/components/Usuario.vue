<template>
    <section>
        <h1>El identificador es: {{ $route.params.id }}</h1>
        <h2>David Rubio</h2>
        <h5>davidrubiobenito@gmail.com</h5>
        <hr>
        <!--<router-link :to="'/equipo/' + $route.params.id + '/fotos'">Fotos</router-link>-->
        <!--<router-link :to="'/equipo/' + $route.params.id + '/bio'">Bio</router-link> -->
        <router-link :to="{name:'fotos', params: {id: $route.params.id} }">Fotos</router-link>
        <router-link :to="{name:'bio', params: {id: $route.params.id} }">Bio</router-link>
        <hr>
        <router-view></router-view>
    </section>
</template>

