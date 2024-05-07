<template>
    <div>
        <h1>Create Product</h1>
        <form @submit.prevent="createProduct">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="product.name" required>
            
            <label for="price">Price:</label>
            <input type="number" id="price" v-model="product.price" required>
            
            <button type="submit">Create</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: {
                name: '',
                price: 0
            }
        };
    },
    methods: {
        createProduct() {
            // Logic to create the product
            // You can make an API call here to save the product data
            console.log('Product created:', this.product);
        }
    }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>