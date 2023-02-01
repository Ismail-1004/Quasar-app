export default {
    state: {
        productsList: [],
        productsLoader: true
    },
    mutations: {
        fillProductsList (state, products) {
            return state.productsList = products
        },

        filterProducts (state, id) {
            return state.productsList = state.productsList.filter(el => el.product_type_id === +id)
        },

        withOutDeletedProduct (state, id) {
            return state.productsList = state.productsList.filter(el => el.id !== +id)
        },

        clearProductsList (state) {
            return state.productsList.length = 0
        },

        removeLoader (state) {
            state.productsLoader = false
        },

        addLoader (state) {
            return state.productsLoader = true
        },
    },
    actions: {
        async getProducts ({ commit, dispatch }) {
            const url = 'http://94.158.54.194:9092/api/product'
            await dispatch('getRequest', { url, callback: (data) => commit('fillProductsList', data) })
        }
    },
    getters: {
        getProductsList (state) {
            return state.productsList
        },
        getProductsLoader (state) {
            return state.productsLoader
        }
    }
}