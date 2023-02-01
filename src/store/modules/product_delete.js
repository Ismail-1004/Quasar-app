export default {
    actions: {
        async deleteProduct({ commit }, id) {
            try {
                const url = `http://94.158.54.194:9092/api/product/${id}`

                const requestOptions = {
                    method: 'DELETE',
                    "Content-Type": "application/json"
                }

                const response = await fetch(url, requestOptions)

                if (response.ok) {
                    commit('withOutDeletedProduct', id)
                }
            } catch (e) {
                throw e
            }

        }
    }
}