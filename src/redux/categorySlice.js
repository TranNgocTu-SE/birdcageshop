import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk("getCategories", async (args, rejectWithValue) => {
    const response = await fetch("http://20.197.41.167/api/v1/birdtype");
    try {
        const result = response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }

})



const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        loading: false,
        error: '',
    },
    extraReducers: builder => {
        builder.addCase(getCategories.pending, state => {
            state.loading = true;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    }
})


export default categorySlice.reducer;