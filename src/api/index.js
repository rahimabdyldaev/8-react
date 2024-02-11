import axios from "axios";

const endpoint = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});

const getBooks = () =>endpoint.get('/books');
const getCartItems = () => endpoint.get('/cartItems')

const addCartItem = (payload) => endpoint.post('/cartItems', payload);
const deleteCartItem = (payload) => endpoint.delete(`cartItems/${payload.id}`);
const editCartItem = (payload) => endpoint.put(`/cartItems/${payload.id}`, payload);

const api = {
    getBooks,
    getCartItems,
    addCartItem,
    deleteCartItem,
    editCartItem,
};

export default api;