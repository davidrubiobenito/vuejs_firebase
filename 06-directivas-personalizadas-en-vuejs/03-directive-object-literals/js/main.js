Vue.directive ('fijar', {

    bind(el, binding) {
        console.log(binding.value);
    }

});

new Vue({
    el: '#app',
});


