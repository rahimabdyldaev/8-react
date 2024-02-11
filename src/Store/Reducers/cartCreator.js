import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api';
import { setCart } from "../Slices/cartSlice";

const fetchCart = createAsyncThunk('Cart/fetchItems', async (payload, thunkApi) => {
    try{
        const response = await api.getCartItems();
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue('Failes to fetch. Please try again later');
    }
});
const createItem = (book, item = {count: 0, total: 0}, quantity) => {
    const {count, total} = item;

    return{
        title: book.title,
        id: book.id,
        count: count + quantity,
        total: total + book.price * quantity,
    };
};

export const addToCart = createAsyncThunk('cart/addItem', async (payload, thunkApi) => {
        try{
            const {books} = thunkApi.getState().booklist;
            const {cart} = thunkApi.getState().cart;
            const book = books.find((bookItem) => bookItem.id === payload);
            const item = cart.find((cartItem) => cartItem.id === payload);
            const newItem = createItem(book, item)

            if(item) {
                await api.editCartItem(newItem);
                const cartItem = cart.map((el) => (el.id === payload ? newItem : el));
                return thunkApi.dispatch(setCart(cartItem));
            }
            
            await api.addCartItem(newItem);
            return thunkApi.dispatch(setCart([...cart, newItem]));
        }catch(err){
            return thunkApi.rejectWithValue('Something has gone wrong');
        }
    });

    export const removeFromCart = createAsyncThunk('cart/addItem', async (payload, thunkApi) => {
        try{
            const {books} = thunkApi.getState().booklist;
            const {cart} = thunkApi.getState().cart;
            const book = books.find((bookItem) => bookItem.id === payload);
            const item = cart.find((cartItem) => cartItem.id === payload);
            const newItem = createItem(book, item)

            if(item.count <= 1) {
                await api.deleteCartItem(newItem);
                const cartItem = cart.filter((el) => (el.id !== payload));
                return thunkApi.dispatch(setCart(cartItem));
            }
            
            await api.editCartItem(newItem);
            const cartItems = cart.map((el) => (el.id === payload ? newItem : el));
            return thunkApi.dispatch(setCart([...cart, newItem]));
            }catch(err){
            return thunkApi.rejectWithValue('Something has gone wrong');
        }
    });
export default fetchCart;