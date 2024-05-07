<template>
    <div>
        <h1>Contact</h1>
        <form @submit="submitForm">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
            
            <label for="message">Message:</label>
            <textarea id="message" v-model="message" required></textarea>
            
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
            // You can send the form data to an API or perform any other action
            console.log('Form submitted!');
            console.log('Name:', this.name);
            console.log('Email:', this.email);
            console.log('Message:', this.message);
        }
    }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>