<template>
<div>
    <h1>Register</h1>
    <form @submit="register">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>

        <label for="password_confirmation">Confirm Password:</label>
        <input type="password" id="password_confirmation" v-model="password_confirmation" required>
        
        <label for="image">Profile Photo URL:</label>
        <input type="text" id="image" v-model="image">

        <span class="error">{{ errorMessage }}</span>

        <button type="submit">Register</button>
    </form>
</div>
</template>

<script>
import axios from 'axios';
import { BASE_URL, setToken, TOKEN } from '@/apiConfig';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            image: '',
            errorMessage: ''
        };
    },
    methods: {
        async register(event) {
            event.preventDefault();

            const user = {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
                device_name: 'browser'
            };

            if (this.profile_photo_url) {
                user.profile_photo_url = this.profile_photo_url;
            }

            try {
                
                const response = await axios.post(`${BASE_URL}/api/v1/register`, user);

                this.$store.commit('setUser', response.data.user);
                this.$store.commit('setToken', response.data.token);
                setToken(response.data.token); // Call setToken with the received token

                // Store the user ID and the token in local storage
                localStorage.setItem('userId', response.data.user.id);
                localStorage.setItem('token', response.data.token);

                // Redirect to home page and refresh
                window.location.href = '/';
                // Store the authentication token
                localStorage.setItem('token', response.data.token);

            } catch (error) {
                if (error.response && error.response.data.message === 'The email has already been taken.') {
                    this.errorMessage = 'This email is already used.';
                } else {
                    console.error('Error:', error);
                    if (error.response) {
                        console.error('Response data:', error.response.data);
                        console.error('Response status:', error.response.status);
                        console.error('Response headers:', error.response.headers);
                    } else if (error.request) {
                        console.error('Request:', error.request);
                    } else {
                        console.error('Error message:', error.message);
                    }
                }
            }
        }
    }
};
</script>

<style>
.error {
    color: red;
}
</style>