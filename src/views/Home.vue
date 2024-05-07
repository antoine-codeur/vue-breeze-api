<template>
    <div class="home">
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of your Vue.js application.</p>
        <p>Token: {{ token }}</p>
        <p>TOKEN: {{ TOKEN }}</p>
    </div>
</template>

<script>
import { TOKEN } from '@/apiConfig'; // Import TOKEN

export default {
    name: 'Home',
    computed: {
        token() {
            return this.$store.state.token; // Access the token from the Vuex store
        },
        TOKEN() { // Add a computed property for TOKEN
            return TOKEN;
        }
    }
}
</script>

<style scoped>
.home {
    text-align: center;
    margin-top: 50px;
}
</style>