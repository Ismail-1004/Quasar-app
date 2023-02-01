export default {
    actions: {
        async getRequest({ commit }, querySettings) {
            try {
                const response = await fetch (querySettings.url)
                const data = await response.json()

                querySettings.callback !== undefined ? querySettings.callback(data) : ''
            } catch (e) {
                throw e
            }
        }
    }
}