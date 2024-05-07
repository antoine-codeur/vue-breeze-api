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
            
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL, TOKEN } from '@/apiConfig';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
    },
    methods: {
        async register(event) {
            event.preventDefault();

            try {
                const response = await axios.post(`${BASE_URL}api/v1/register`, {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                    device_name: 'browser'
                });

                // Handle the response accordingly
                console.log(response.data);
            } catch (error) {
                // Handle the error accordingly
                console.error(error);
            }
        }
    }
}
</script>

<style scoped>
/* Add your custom styles here */
</style>