import { createStore } from 'vuex'
import helper from './helper'
import orders from './modules/order'
import employees from './modules/employees'
import question from './modules/question'
import product from './modules/product'

export default createStore({
  state: {
    url: "http://localhost:4000/api/v1",
    imgUrl: "http://localhost:4000"
  },
  getters: {
    url(state) {
      return state.url
    },
    imgUrl(state) {
      return state.imgUrl
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    helper,
    orders,
    employees,
    question,
    product
  }
})