import axios from 'axios'
import store from '../store'

export function errorInterceptor() {
    axios.interceptors.response.use(null, (error) => {
        const { response } = error
        if (!response) {
            console.error(error)
            return;
        }
    
        if ([401, 403].includes(response.status) && store.state.logged) {
            store.commit('logOut')
            window.location.href = "/"
        }
    });
}