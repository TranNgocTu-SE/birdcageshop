import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk("getReviews", async (id, rejectWithValue) => {
    const response = await fetch(`http://20.197.41.167/api/v1/review/productId?productId=${id}`);
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }

})

export const getReviewById = createAsyncThunk("getReviewById", async (id, rejectWithValue) => {
    const response = await fetch(`http://20.197.41.167/api/v1/review/productId?productId=${id}`);
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }

})


export const createReview = createAsyncThunk("createReview", async (data, { rejectWithValue }) => {
    const response = await fetch("http://20.197.41.167/api/v1/review", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})



const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        reviews: [],
        loading: false,
        error: '',
        reviewById: []
    },
    extraReducers: builder => {
        builder.addCase(getReviews.pending, state => {
            state.loading = true;
        });
        builder.addCase(getReviews.fulfilled, (state, action) => {
            state.loading = false;
            state.reviews = action.payload;
        });
        builder.addCase(getReviews.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        //get review by id 
        builder.addCase(getReviewById.pending, state => {
            state.loading = true;
        });
        builder.addCase(getReviewById.fulfilled, (state, action) => {
            state.loading = false;
            state.reviewById = action.payload;
        });
        builder.addCase(getReviewById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // tao reivew
        builder.addCase(createReview.pending, state => {
            state.loading = true;
        });
        builder.addCase(createReview.fulfilled, (state, action) => {
            state.loading = false;
            state.reviews.push(action.payload);
        });
        builder.addCase(createReview.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    }
})

export default reviewSlice.reducer;