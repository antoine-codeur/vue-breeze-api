<template>
    <h1>Profile</h1>
    <div class="profile-page">
        <div class="profile-image">
            <img v-if="user.profile_photo_url" :src="user.profile_photo_url" alt="Profile Photo">
        </div>
        <div class="profile-info">
            <h2>{{ user.name }}</h2>
            <p>Email: {{ user.email }}</p>
            <p>Role: {{ user.role }}</p>
        </div>
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
            const userId = this.$store.state.user.id; // Get the user ID from the Vuex store
            const response = await axios.get(`${BASE_URL}/api/v1/users/${userId}`, {
                headers: {
                    Authorization: TOKEN // Use TOKEN for the Authorization header
                }
            });

            this.user = response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
</script>

<style>
.profile-page {
    display: flex;
    justify-content: space-between;
}

.profile-image {
    width: 50%;
}
.profile-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}

.profile-info {
    width: 50%;
    padding: 2em;
}
</style>