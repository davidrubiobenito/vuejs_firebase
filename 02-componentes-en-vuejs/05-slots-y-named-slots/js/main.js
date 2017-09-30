
Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template:   `
                <section class="alerta" :class="[tipo, posicion]">
                    <header class="alerta__header">
                        <slot name="header">Hola</slot>
                    </header>
                     <div class="alerta__contenido">
                        <slot>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Assumenda atque eligendi illum provident veniam? Accusamus cum debitis doloremque earum est 
                            exercitationem, explicabo illum impedit, in itaque nemo numquam, quasi quisquam!    
                        </slot>    
                    </div>
                    <footer class="alerta__footer">
                        <slot name="footer">Este es el texto footer</slot>                        
                    </footer>                    
                </section>
                `,


});

new Vue({
    el: 'main',

});


