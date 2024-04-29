const employees = {
    state: {
        employees: []
    },
    getters: {
        employees(state) {
            return state.employees
        }
    },
    mutations: {
        employees(state, payload) {
            state.employees = payload
        }
    },
    actions: {
        allEmployees(context) {
            try {
                context.dispatch('getAxios', 'employees').then(res => {
                    context.commit('employees', res.data)
                }).catch((error) => {
                    console.log(error)
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}


export default employees