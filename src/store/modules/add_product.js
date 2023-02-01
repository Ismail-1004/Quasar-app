export default {
    state: {
        modalIsActive: false
    },
    mutations: {
        openModal (state) {
            return state.modalIsActive = true
        },
        closeModal (state) {
            return state.modalIsActive = false
        }
    },
    actions: {
        async addProduct ({ commit, dispatch }, productInfo) {
            const url = 'http://94.158.54.194:9092/api/product'
            await dispatch('POST_REQUEST', { url, product: productInfo, callback: (async (data) => await commit('addProducts', data))})
        }
    },
    getters: {
        isActiveModal (state) {
            return state.modalIsActive
        }
    }
}