const compartido = {
    usuario: {
        nombre: 'David Rubio',
    }
};

new Vue({
    el: '#app1',
    data: compartido,
});

new Vue({
    el: '#app2',
    data: compartido,
});


