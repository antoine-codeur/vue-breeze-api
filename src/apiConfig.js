// apiConfig.js
export const BASE_URL = 'http://localhost:8888';
export let TOKEN = 'IZyIoUhm4O5BOx3gtJ3VXQqnX6f4lfdPNbjt1xgC6c5222ea';

export function setToken(token) {
    TOKEN = token;
}
export function getToken() {
    return TOKEN;
}