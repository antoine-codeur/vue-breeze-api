<template>
  <header>
      <nav class="navbar">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/products">Products</router-link>
          <router-link v-if="isLoggedIn" to="/productsCreate">Create Products</router-link>
      </nav>
      <nav class="navbar">
        <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
        <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
        <router-link v-else to="/profile">Profile</router-link>
    </nav>
  </header>
</template>
  
<script>
export default {
  name: 'Header',
  computed: {
        isLoggedIn() {
            // Replace this with your own logic to check if the user is logged in
            // For example, you can check if a user token exists in your Vuex store or in localStorage
            return false;
        }
    }
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>