// apiConfig.js
export const BASE_URL = 'http://localhost:8888';
export let TOKEN = `${localStorage.getItem('token') || ''}`;

export function setToken(token) {
    TOKEN = `${token}`;
    localStorage.setItem('token', token); // Store the token in local storage
}