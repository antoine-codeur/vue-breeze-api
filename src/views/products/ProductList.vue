<template>
    <h1>Product List</h1>
    <label for="rowsPerPage">Rows per page:</label>
    <select id="rowsPerPage" v-model="rowsPerPage">
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
    </select>
    <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th v-if="isLoggedIn">Stock</th>
                <th v-if="isLoggedIn">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in paginatedProducts" :key="product.id" @click="viewProduct(product.id)" class="clickable-row">
                <td><img v-if="product.image" :src="product.image" alt="Product Image"></td>
                <td>{{ product.name }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.price }}</td>
                <td v-if="isLoggedIn">{{ product.stock }}</td>
                <td v-if="isLoggedIn" class="no-hover">
                    <button @click.stop="editProduct(product.id)">Edit</button>
                    <button @click.stop="deleteProduct(product.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
</template>

<script>
import axios from 'axios';
import { BASE_URL, TOKEN } from '@/apiConfig';

export default {
    data() {
        return {
            products: [],
            rowsPerPage: '10',
            currentPage: 1
        };
    },
    computed: {
        paginatedProducts() {
            const start = (this.currentPage - 1) * this.rowsPerPage;
            const end = start + parseInt(this.rowsPerPage);
            return this.products.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.products.length / this.rowsPerPage);
        },
        isLoggedIn() {
            return !!TOKEN;
        }
    },
    async mounted() {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/products`); // Use the base URL

            this.products = response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    },
    watch: {
        rowsPerPage() {
            this.currentPage = 1;
        }
    },
    methods: {
        viewProduct(id) {
            this.$router.push(`/products/${id}`);
        },
        editProduct(id) {
            this.$router.push(`/products/edit/${id}`);
        },
        async deleteProduct(id) {
            try {
                await axios.delete(`http://localhost:8888/api/v1/products/${id}`, {
                    headers: {
                        Authorization: TOKEN
                    }
                });

                // Remove the product from the list
                this.products = this.products.filter(product => product.id !== id);
            } catch (error) {
                console.error('Error:', error);
            }
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        }
    }
};
</script>

<style>
table {
    padding: 0;
    margin: 0;
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #ddd;
}
th {
    text-align: center;
    padding-top: 12px;
    padding-bottom: 12px;
    color: hsla(160, 100%, 37%, 1);
}
td {
    padding-left: 1em;
    color: #fff;
}
td:first-child,
td:last-child {
    padding-left: 0;
}
td:last-child {
    text-align: center;
}
td:last-child button {
    margin: 0 0.5em;
    padding: 0.2em 0.7em;
    border: none;
    border-radius: 20px;
    background-color: hsla(160, 100%, 37%, 1);
    color: #000;
    cursor: pointer;

    transition: all 0.3s;
}
td:last-child button:hover {
    scale: 1.1;
    color: #fff;
}
td:last-child button:hover:first-child {
    background-color: hsla(200, 100%, 37%, 1);
}
td:last-child button:hover:last-child {
    background-color: hsla(10, 100%, 37%, 1);
}
img {
    display: block;
    max-width: 100%;
    height: 50px;
    margin: auto;
}
.clickable-row {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.clickable-row:hover{
    background-color: #333;
}
</style>