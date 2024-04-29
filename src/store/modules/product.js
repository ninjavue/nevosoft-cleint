const product = {
    state: {
        product: []
    },
    getters: {
        product(state) {
            return state.product
        }
    },
    mutations: {
        product(state, payload) {
            state.product = payload
        }
    },
    actions: {
        allProduct(context) {
            try {
                context.dispatch('getAxios', 'product').then(res => {
                    context.commit('product', res.data)
                }).catch((error) => {
                    console.log(error)
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}


export default product