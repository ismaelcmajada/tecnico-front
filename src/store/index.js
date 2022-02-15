import { createStore } from 'vuex'
import VueJwtDecode from "vue-jwt-decode"
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default createStore({
    state: {
        logged: false,
        userId: "",
        token: ""
    },
    plugins: [vuexLocal.plugin],
    mutations: {
        logIn(state, token) {
            state.token = token

            const jwtDecoded = VueJwtDecode.decode(token)
            state.userId = jwtDecoded._id

            state.logged = true
        },
        logOut(state) {
            state.userId = null
            state.token = null
            state.logged = false
        }
    }
})