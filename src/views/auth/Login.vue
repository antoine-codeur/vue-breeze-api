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

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async login(event) {
            event.preventDefault();

            try {
                const response = await axios.post('http://localhost:8888/api/v1/login', {
                    email: this.email,
                    password: this.password,
                    device_name: 'browser'
                });

                // Handle the response accordingly
                // For example, you can store the user and token data in your Vuex store or in localStorage
                console.log(response.data);
            } catch (error) {
                // Handle the error accordingly
                // For example, you can display an error message to the user
                console.error(error);
            }
        }
    }
}
</script>