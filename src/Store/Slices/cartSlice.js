import {createSlice } from '@reduxjs/toolkit'
import fetchCart from '../Reducers/cartCreator';

const initialState = {
    cart: [],
    cartStatus: 'pending',
    cartError: '',
};

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchCart.pending, (state) =>{
            state.cartStatus = 'pending';
            state.cart = [];
            state.cartError = '';
        });

        builder.addCase(fetchCart.rejected, (state, action)=>{
            state.cartError = action.payload;
            state.cartStatus = 'rejected';
        });

        builder.addCase(fetchCart.fulfilled, (state, action)=>{
            state.cartStatus = 'fulfilled';
            state.cart = action.payload;
        });
    },
});

const cartReducer = cartSlice.reducer;

export default cartReducer;
export const {setCart} = cartSlice.actions;