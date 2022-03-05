import { createStore } from 'vuex'

export default createStore({
    state: {

        productos: [
            { name: "Champu Anticaspa", price: 7, qty: 0, id: 1 },
            { name: "Almendras", price: 7, qty: 0, id: 2 },
            { name: "Nestea", price: 7, qty: 0, id: 3 },
            { name: "DvD Player", price: 45, qty: 0, id: 4 },
            { name: "DvD Pack [70]", price: 45, qty: 0, id: 4 },
            { name: "Avellanas", price: 4, qty: 0, id: 2 },

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