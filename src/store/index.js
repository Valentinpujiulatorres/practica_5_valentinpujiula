import { createStore } from 'vuex'

export default createStore({
    state: {

        productos: [
            { name: "Bicicleta Gris", price: 120, qty: 0, id: 1, image: 'bG' },
            { name: "Bicicleta Amarilla L.E", price: 215, qty: 0, id: 2, image: 'bA' },
            { name: "Bicicleta Azul", price: 215, qty: 0, id: 3, image: 'bAz' },
            { name: "Bicicleta Vintage", price: 599, qty: 0, id: 2, image: 'bVin' },

        ],
        Carrito: [],




    },
    mutations: {
        addItem: () => {


            // state.Carrito.push({ id: state.id, name: state.name, qty: 1 });
        },

    },
    getters: {},
    // actions: {},
    // modules: {}
})