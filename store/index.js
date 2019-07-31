import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isModalOpened: false,
      rates: {}
    },
    mutations: {
      openModal (state) {
        state.isModalOpened = true
        document.body.className = 'modal-opened'
      },
      closeModal (state) {
        state.isModalOpened = false
        document.body.className = ''
      },
      setRates (state, data) {
        state.rates = data
        // Conversion Rate
        state.rates.GBP.GBP = 1
        state.rates.USD.USD = 1
        state.rates.NGN.NGN = 1
      }
    },
    actions: {
      async getRates ({ commit }) {

        //UPD: иммитация запросов к сторонним API
        const response1 = {
          rates: {
            USD: 0.00276775,
            NGN: 449.194,
          },
          base: "GBP",
          date: "2019-07-25"
        }
        const response2 = {
          rates: {
            NGN: 361.304,
            GBP: 0.00222621
          },
          base: "USD",
          date: "2019-07-25"
        }
        const response3 = {
          rates: {
            USD: 1.24314,
            GBP: 0.804414
          },
          base: "NGN",
          date: "2019-07-25"
        }

        commit('setRates', {GBP: response1.rates, USD: response2.rates, NGN: response3.rates})
      }
    },
    getters: {
      isModalOpened: state => state.isModalOpened
    }
  })
}

export default createStore
