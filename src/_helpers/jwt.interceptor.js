import axios from 'axios';
import store from '../store'

export function jwtInterceptor() {
    axios.interceptors.request.use(request => {
        const isApiUrl = request.url.startsWith(process.env.VUE_APP_API_URL);

        if (store.state.logged && isApiUrl) {
            request.headers.common['auth-token'] =  store.state.token;
        }

        return request;
    });
}