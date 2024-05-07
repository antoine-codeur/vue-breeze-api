<template>
    <div>
        <h1>Login</h1>
        <form @submit="login">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
            
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
            
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
import { BASE_URL, setToken } from '@/apiConfig'; // Import the setToken function

export default {
    data() {
        return {
            email: '', // Define email
            password: '', // Define password
        };
    },
    methods: {
        async login(event) {
            event.preventDefault();

            try {
                const response = await axios.post(`${BASE_URL}/api/v1/login`, {
                    email: this.email,
                    password: this.password,
                    device_name: 'browser'
                });

                this.$store.commit('setUser', response.data.user);
                this.$store.commit('setToken', response.data.token);
                setToken(response.data.token); // Call setToken with the received token

                // Store the token in local storage
                localStorage.setItem('token', response.data.token);
                
                window.location.href = '/';
            } catch (error) {
            }
            reload();
        }
    }
};
</script>