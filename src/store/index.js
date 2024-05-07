import { createStore } from 'vuex';

export default createStore({
    state: {
        user: {
            id: localStorage.getItem('userId') || null, // Initialize user ID from local storage
        },
        token: localStorage.getItem('token') || null, // Initialize token from local storage
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
    }
});