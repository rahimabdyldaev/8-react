import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "./Reducers/booklistCreator";
import cartReducer from "./Slices/cartSlice";
const rootReducer = {
    booklist: bookListReducer,
    cart: cartReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;