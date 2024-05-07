<template>
  <header>
      <nav class="navbar">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/products">Products</router-link>
          <router-link v-if="isLoggedIn" to="/products/create">Create Products</router-link>
      </nav>
      <nav class="navbar">
        <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
        <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
        <router-link v-else to="/profile">Profile</router-link>
    </nav>
  </header>
</template>
  
<script>
import axios from 'axios';
import { BASE_URL, TOKEN } from '@/apiConfig'; // Import the base URL and token

export default {
    // ...
    computed: {
        isLoggedIn() {
            return !!TOKEN; // Return true if the token is set and false otherwise
        }
    },
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>