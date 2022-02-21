import { createStore } from 'vuex'

export default createStore({
    state: {

        productos: [
            { id: 1, name: 'Lacasitos', price: 3.5 },
            { id: 2, name: 'Cheesecake', price: 4 },
            { id: 3, name: 'Fondue', price: 7 },
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