export default {
    state: {
        product: {},
        updateModalIsActive: false
    },

    mutations: {
        updateClickHandler (state, product) {
            state.updateModalIsActive = true
            return state.product = product
        },

        closeUpdateModal (state) {
            return state.updateModalIsActive = false
        }
    },

    actions: {
        async updateProduct ({ commit, dispatch }, product) {
            const requestOptions = {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            }

            const url = `http://94.158.54.194:9092/api/product`

            const response = await fetch (url, requestOptions)
            
            if (response.ok) {
              
            }
        }
    },

    getters: {
        getUpdateModalIsActive (state) {
            return state.updateModalIsActive
        },

        getProduct (state) {
            return state.product
        }
    }
}