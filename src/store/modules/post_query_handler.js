export default {
    actions: {
        async POST_REQUEST({ commit }, requestInfo) {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(requestInfo.product)
                }

                const response = await fetch(requestInfo.url, requestOptions)

                if (response.ok) {
                    commit('closeModal')
                    if (requestInfo.callback !== undefined) requestInfo.callback(requestInfo.product)
                }
            } catch (e) {
                throw e
            }   
        }
    }
}