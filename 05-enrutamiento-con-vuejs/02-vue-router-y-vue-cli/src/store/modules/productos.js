const productos = [
     {nombre: 'Steam link', precio: 50},
     {nombre: 'Steam Controller', precio: 59},
     {nombre: 'Axios Controller', precio: 17},
 ];

const mutations = {
    anadirProducto: (state, producto) => state.productos.unshift(producto),
};

export default {
    state: productos,
    mutations: mutations,
};