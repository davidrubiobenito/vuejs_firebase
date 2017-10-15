Vue.directive ('destacar', {
    bind(el,binding,vnode) {
        el.style.color = 'blue';
        el.style.fontSize = binding.value + 'px';
    }
});

new Vue({
    el: '#app',
});


