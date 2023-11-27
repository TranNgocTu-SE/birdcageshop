import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const getOrders = createAsyncThunk("getOrders", async (args, rejectWithValue) => {
    const response = await fetch("http://20.197.41.167/api/v1/orders");
    try {
        const result =await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);

    }

})

export const getOrder = createAsyncThunk("getOrder", async (id, rejectWithValue) => {
    const response = await fetch(`http://20.197.41.167/api/v1/orders/orderId?idTmp=${id}`);
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);

    }

})

export const getOrderByStaff = createAsyncThunk("getOrderByStaff", async (id, rejectWithValue) => {
    const response = await fetch(`http://20.197.41.167/api/v1/orders/empId?idTmp=${id}`);
    try {
        const result = response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);

    }

})


export const getOrderByCustomer = createAsyncThunk("getOrderByCustomer", async (id, rejectWithValue) => {
    const response = await fetch(`http://20.197.41.167/api/v1/orders/userId?idTmp=${id}`);
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);

    }

})

export const getOrderDetailByOrder = createAsyncThunk("getOrderDetailByOrder", async (id, rejectWithValue) => {
    const response = await fetch(`http://20.197.41.167/api/v1/orderdetails/orderId?orderId=${id}`);
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);

    }

})




export const createOrderRequest = createAsyncThunk("createOrderRequest", async (data, { rejectWithValue }) => {
    const response = await fetch("http://20.197.41.167/api/v1/orders", {
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
    const response = await fetch(`http://20.197.41.167/api/v1/orders/orderId`, {
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
    const response = await fetch(`http://20.197.41.167/api/v1/orders/orderId/assigned-employee`, {
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
        success: false,
        listOrderByStaff :[],
        OrderDetailByOrder: [],
        OrderByCustomer : [],
        order:{},
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

        // get all orders detail by orderId
        builder.addCase(getOrderDetailByOrder.pending, state => {
            state.loading = true;
        });
        builder.addCase(getOrderDetailByOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.OrderDetailByOrder = action.payload;
        });
        builder.addCase(getOrderDetailByOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        //get order
        builder.addCase(getOrder.pending, state => {
            state.loading = true;
        });
        builder.addCase(getOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.order = action.payload;
        });
        builder.addCase(getOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // get order for customer
        builder.addCase(getOrderByCustomer.pending, state => {
            state.loading = true;
        });
        builder.addCase(getOrderByCustomer.fulfilled, (state, action) => {
            state.loading = false;
            state.OrderByCustomer = action.payload;
        });
        builder.addCase(getOrderByCustomer.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // get all orders by staff
        builder.addCase(getOrderByStaff.pending, state => {
            state.loading = true;
        });
        builder.addCase(getOrderByStaff.fulfilled, (state, action) => {
            state.loading = false;
            state.listOrderByStaff = action.payload;
        });
        builder.addCase(getOrderByStaff.rejected, (state, action) => {
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