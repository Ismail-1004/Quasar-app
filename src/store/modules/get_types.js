export default {
    state: {
        productsTypeList: [],
        loaderType: true
    },
    mutations: {
        productsTypeListFill (state, products) {
            return state.productsTypeList = products
        },

        removeLoader (state) {
            return state.loaderType = false
        }
    },
    actions: {
        async getProductsType ({ commit, dispatch }) {
            const url = 'http://94.158.54.194:9092/api/product/get-product-types'
            await dispatch('getRequest', { url, callback: (data) => commit('productsTypeListFill', data)})
        }
    },
    getters: {
        productsTypeList (state) {
            return state.productsTypeList
        },
        getTypeLoader (state) {
            return state.loaderType
        }
    }
}