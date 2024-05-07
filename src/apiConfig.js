// apiConfig.js
export const BASE_URL = 'http://localhost:8888';
export let TOKEN = localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '';

export function setToken(token) {
    TOKEN = token ? `Bearer ${token}` : '';
    localStorage.setItem('token', token);
}