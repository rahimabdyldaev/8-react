import {createSlice} from '@reduxjs/toolkit';
import fetchAllBooks from '../Reducers/booklistCreator';

const initialState = {
    booksLoading: false,
    books: [],
    booksError: '',
    booksStatus: 'pending',
};

const bookListSlice = createSlice({
    initialState,
    name: 'bookList',
    reducers: {
        setBooksStatus: (state, action) => {
            state.booksStatus = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllBooks.pending, (state, action) => {
            state.booksStatus = 'pending';
            state.books = [];
            state.booksError = '';
        })

        builder.addCase(fetchAllBooks.fulfilled, (state, action) =>{
            state.booksStatus = 'fulfilled';
            state.books = action.payload
        } )

        builder.addCase(fetchAllBooks.rejected, (state, action) =>{
            state.booksStatus = 'rejected';
            state.booksError = action.payload;
        } )
    }
});

const bookListReducers = bookListSlice.reducer;
export default bookListReducers;
export const {setBooksStatus} = bookListSlice.actions;