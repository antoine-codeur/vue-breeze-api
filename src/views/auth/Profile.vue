<template>
    <div>
        <h1>Profile</h1>
        <p>Name: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Role: {{ user.role }}</p>
        <img :src="user.profile_photo_url" alt="Profile Photo">
    </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL, TOKEN } from '@/apiConfig';

export default {
    data() {
        return {
            user: {}
        };
    },
    async created() {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            this.user = response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
</script>