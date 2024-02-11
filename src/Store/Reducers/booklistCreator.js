import { createAsyncThunk } from "@reduxjs/toolkit";
import api  from '../../api';

const fetchAllBooks = createAsyncThunk('booklist/fetchAll', async (payload, thunkApi) =>{
    try{
        const response = await api.getBooks();
        return response.data;
    }catch (err) {
        return thunkApi.rejectWithValue('Failed to fetch, please try again later');
    }
})

export default fetchAllBooks;