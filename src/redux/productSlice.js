import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("getProducts", async (args, rejectWithValue) => {
    const response = await fetch("http://20.197.41.167/api/v1/products");
    try {
        const result = response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }

})

export const getProductByCategory = createAsyncThunk("getProductByCategory", async (id, rejectWithValue) => {
    const response = await fetch(`http://20.197.41.167/api/v1/products/cateId?cateId=${id}`);
    try {
        const result = response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }

})


export const getProduct = createAsyncThunk("getProduct", async (id, rejectWithValue) => {
    const response = await fetch(`http://20.197.41.167/api/v1/products/idTmp?idTmp=${id}`);
    try {
        const result = response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }

})

export const createProduct = createAsyncThunk("createProduct", async (data, { rejectWithValue }) => {
    console.log(data);
    const response = await fetch("http://20.197.41.167/api/v1/products", {
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



export const updateProduct = createAsyncThunk("updateProduct", async (data, { rejectWithValue }) => {
    const response = await fetch(`http://20.197.41.167/api/v1/products`, {
        method: "PUT",
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

export const deleteProduct = createAsyncThunk("deleteProduct", async (id, rejectWithValue) => {
    const response = await fetch(`http://20.197.41.167/api/v1/products?idTmp=${id}`,{method:"DELETE"});
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);

    }

})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        productByCategory: [],
        loading: false,
        product: null,
        isDeleted : false,
        error: '',
    },
    extraReducers: builder => {
        builder.addCase(getProducts.pending, state => {
            state.loading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // get products by category
        builder.addCase(getProductByCategory.pending, state => {
            state.loading = true;
        });
        builder.addCase(getProductByCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.productByCategory = action.payload;
        });
        builder.addCase(getProductByCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        builder.addCase(getProduct.pending, state => {
            state.loading = true;
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload;
        });
        builder.addCase(getProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });


        builder.addCase(createProduct.pending, state => {
            state.loading = true;
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products.push(action.payload);
        });
        builder.addCase(createProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
        // delete Product
        builder.addCase(deleteProduct.pending, state => {
            state.loading = true;
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.loading = false;
            const {id} = action.payload;
            if(id){
                state.products = state.products.filter((ele) => ele.productId !== id);
            }
            state.isDeleted = !state.isDeleted;
        });
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // update product
        builder.addCase(updateProduct.pending, state => {
            state.loading = true;
        });
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = state.products.map((ele) => 
                ele.productId === action.payload.productId ? action.payload : ele
            );
        });
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    
    }
})

export default productSlice.reducer;