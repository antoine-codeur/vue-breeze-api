<template>
    <div class="product-page">
        <div class="product-image">
            <img v-if="product.image" :src="product.image" alt="Product Image">
        </div>
        <div class="product-info">
            <h1>{{ product.name }}</h1>
            <p>{{ product.description }}</p>
            <p>Stock: {{ product.stock }}</p>
            <p>Price: {{ product.price }}</p>
            <p v-if="isLoggedIn">Created at: {{ formatDate(product.created_at) }}</p>
            <p v-if="isLoggedIn && product.updated_at !== product.created_at">Updated at: {{ formatDate(product.updated_at) }}</p>
            <div v-if="isLoggedIn">
                <button @click="editProduct(product.id)">Edit</button>
                <button @click="deleteProduct(product.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL, TOKEN } from '@/apiConfig';

export default {
    data() {
        return {
            product: {},
        };
    },
    computed: {
        isLoggedIn() {
            return !!TOKEN;
        }
    },
    async mounted() {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/products/${this.$route.params.id}`);

            this.product = response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    },
    methods: {
        formatDate(dateString) {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
            const date = new Date(dateString);
            return date.toLocaleDateString(undefined, options);
        },
        editProduct(id) {
            this.$router.push(`/products/edit/${id}`);
        },
        async deleteProduct(id) {
            try {
                await axios.delete(`${BASE_URL}/api/v1/products/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                // Redirect to the product list
                this.$router.push('/products');
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
};
</script>

<style>
.product-page {
    display: flex;
    justify-content: space-between;
}

.product-image {
    width: 50%;
}
.product-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}

.product-info {
    width: 50%;
    padding: 2em;
}
</style>