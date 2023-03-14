import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    todos: [],
    isLoding: false,
    isError: false,
    error: null,
}
//청크함수
export const __getTodos = createAsyncThunk(
    "getTodos",
    async (payload, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:4000/todos");
            console.log(response);
        } catch (error) {
            console.log(error)
        }
       
    }
);

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: {}
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;