const orders = {
    state: {
        orders: [],
        order:{}
    },
    getters: {
        orders(state) {
            return state.orders
        },
        order(state) {
            return state.order
        },
    },
    mutations: {
        orders(state, payload) {
            state.orders = payload
        },
        order(state, payload) {
            state.order = payload
        },
        addOrder(state, payload) {
            state.orders.push(payload)
        },
        saveOrder(state, payload) {
            state.orders = state.orders.map(x => {
                if (x._id == payload._id) {
                    return payload
                }
                return x
            })
        },
        deleteOrder(state, payload) {
            let index = state.orders.findIndex(x => x._id == payload._id)
            state.orders.splice(index, 1)
        }
    },
    actions: {
        allOrder(context) {
            try {
                context.dispatch('getAxios', 'type').then(res => {
                    context.commit('orders', res.data)
                }).catch((error) => {
                    console.log(error)
                })
            } catch (error) {
                console.log(error)
            }
        },
        getOrder(context, payload) {
            try {
                return context.dispatch('getAxios', `type/${payload}`)
            } catch (error) {
                console.log(error)
            }
        },
        postOrder(context, payload) {
            try {
                return context.dispatch('postAxios', {
                    url: 'order',
                    data: payload
                }).catch((error) => {
                    console.log(error)
                })
            } catch (error) {
                console.log(error)
            }
        },
        editOrder(context, payload) {
            try {
                context.dispatch('editAxios', {
                    url: `type/edit/${payload._id}`,
                    data: payload
                }).then(res => {
                    context.commit('saveOrder', res.data)
                }).catch((error) => {
                    console.log(error)
                })
            } catch (error) {
                console.log(error)
            }
        },
        deleteOrder(context, payload) {
            try {
                context.dispatch('deleteAxios', `type/delete/${payload}`).then(res => {
                    context.commit('deleteOrder', res.data)
                }).catch((error) => {
                    console.log(error)
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}


export default orders