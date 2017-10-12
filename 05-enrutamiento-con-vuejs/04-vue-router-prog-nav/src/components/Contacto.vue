<template>
    <div>
        <h2>Contacto</h2>
        <button @click="volverHome()">Volver a home</button>
    </div>
</template>

<script>
    export default {
        created(){
            setTimeout(() => this.$router.push('/') , 2000);
        },
        methods: {
            volverHome()
            {
                this.$router.push('/', () => console.log('Ruta cambiada')); // home
            }
        }
    }
</script>
