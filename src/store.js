import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var count = localStorage.getItem('count')

export default new Vuex.Store({
    state: {
        count
    },
    mutations: {
        increment(state) {
            this.state.count++
        },
        jianshao(state) {
            this.state.count--
        }
    },
    actions: {}
})
