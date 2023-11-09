import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const getOrders = createAsyncThunk("getOrders", async (args, rejectWithValue) => {
    const response = await fetch("https://localhost:44314/api/v1/orders");
    try {
        const result = response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);

    }

})


export const createOrderRequest = createAsyncThunk("createOrderRequest", async (data, { rejectWithValue }) => {
    const response = await fetch("https://localhost:44314/api/v1/orders", {
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

//update status order 
export const updateOrderStatus = createAsyncThunk("updateOrderStatus", async (data, { rejectWithValue }) => {
    console.log(data);
    const response = await fetch(`https://localhost:44314/api/v1/orders/orderId`, {
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

export const assignForStaff = createAsyncThunk("assignForStaff", async (data, { rejectWithValue }) => {
    console.log(data);
    const response = await fetch(`https://localhost:44314/api/v1/orders/orderId/assigned-employee`, {
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

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        listOrders: [],
        UpdateOrder:null,
        loading: false,
        error: '',
        success: false
    },
    extraReducers: builder => {
        builder.addCase(getOrders.pending, state => {
            state.loading = true;
        });
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.listOrders = action.payload;
        });
        builder.addCase(getOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // tao order request

        builder.addCase(createOrderRequest.pending, state => {
            state.loading = true;
        });
        builder.addCase(createOrderRequest.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
        });
        builder.addCase(createOrderRequest.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
        // update order status
        builder.addCase(updateOrderStatus.pending, state => {
            state.loading = true;
        });
        builder.addCase(updateOrderStatus.fulfilled, (state, action) => {
            state.loading = false;
            state.listOrders = state.listOrders.map((ele) => 
                ele.orderId === action.payload.orderId ? action.payload : ele
            );
        });
        builder.addCase(updateOrderStatus.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
 // assign for staff
        builder.addCase(assignForStaff.pending, state => {
            state.loading = true;
        });
        builder.addCase(assignForStaff.fulfilled, (state, action) => {
            state.loading = false;
            state.listOrders = state.listOrders.map((ele) => 
                ele.orderId === action.payload.orderId ? action.payload : ele
            );
        });
        builder.addCase(assignForStaff.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    }
})

export default orderSlice.reducer;