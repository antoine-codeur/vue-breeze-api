<template>
    <h1>Product - {{ product.name }}</h1>
    <span>id:{{ product.id }}</span>
    <div class="product-page">
        <div class="product-image">
            <img v-if="product.image" :src="product.image" alt="Product Image">
            <input type="file" @change="onFileChange">
            <input type="text" v-model="product.image" placeholder="Enter new image URL">
            <button @click="cancelImageChange">Cancel</button>
        </div>
        <div class="product-info">
            <input type="text" v-model="product.name" placeholder="Product Name">
            <textarea v-model="product.description" placeholder="Product Description"></textarea>
            <input type="number" v-model="product.stock" placeholder="Stock">
            <input type="number" v-model="product.price" placeholder="Price">
            <button @click="updateProduct">Update</button>
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
            originalImage: ''
        };
    },
    async mounted() {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/products/${this.$route.params.id}`);

            this.product = response.data;
            this.originalImage = this.product.image;
        } catch (error) {
            console.error('Error:', error);
        }
    },
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            this.product.image = URL.createObjectURL(file);
        },
        cancelImageChange() {
            this.product.image = this.originalImage;
        },
        async updateProduct() {
            try {
                await axios.put(`${BASE_URL}/api/v1/products/${this.product.id}`, this.product, {
                    headers: {
                        Authorization: TOKEN
                    }
                });

                // Redirect to the product page
                this.$router.push(`/products/${this.product.id}`);
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