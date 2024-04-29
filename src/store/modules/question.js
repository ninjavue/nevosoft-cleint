const question = {
    state: {
        question: []
    },
    getters: {
        question(state) {
            return state.question
        }
    },
    mutations: {
        question(state, payload) {
            state.question = payload
        }
    },
    actions: {
        allQuestion(context) {
            try {
                context.dispatch('getAxios', 'question').then(res => {
                    context.commit('question', res.data)
                }).catch((error) => {
                    console.log(error)
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}


export default question