<template>
    <section>
        <h2>Donde encontrarme</h2>
        <p>C/. lo que sea, Madrid</p>

        <h5> {{ newsletter }}</h5>
        <pre>{{ numero }}</pre>

        <template v-if="newsletter">
            <form action="">
                <h3>Newsletter</h3>
                <label for="correoe">Correo-e</label>
                <input type="email" placeholder="Tu correo-e" id="correoe">
            </form>
        </template>

    </section>
</template>

<script>
    export default {
        props: ['newsletter'],
        data() {
            return{
                numero: null,
            }
        },
        beforeRouteEnter : ((to, from, next) => {
            console.log('Antes de entrar');
            setTimeout(() => {
                next((vm) => {
                    vm.numero = Math.floor(Math.random() * 1000);
                })
            }, 2000);
        }),
    }

</script>