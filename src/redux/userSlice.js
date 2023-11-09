import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllUser = createAsyncThunk("getAllUser", async (args, rejectWithValue) => {
    const response = await fetch("https://localhost:44314/api/v1/users");
    try {
        const result = response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);

    }

})


export const getUser = createAsyncThunk("getUser", async (id, rejectWithValue) => {
    const response = await fetch(`http://localhost:8000/users/${id}`);
    try {
        const result = response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);

    }

})


export const deleteUser = createAsyncThunk("deleteUser", async (id, rejectWithValue) => {
    console.log(id);
    const response = await fetch(`https://localhost:44314/api/v1/users?idTmp=${id}`,{method:"DELETE"});
    try {
        const result = response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);

    }

})


export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    const response = await fetch("https://localhost:44314/api/v1/users", {
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

export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
    console.log(data);
    const response = await fetch(`https://localhost:44314/api/v1/users`, {
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


const userSlice = createSlice({
    name: 'user',
    initialState: {
        listUser: [],
        UpdateUser:null,
        loading: false,
        error: '',
    },
    extraReducers: builder => {
        builder.addCase(getAllUser.pending, state => {
            state.loading = true;
        });
        builder.addCase(getAllUser.fulfilled, (state, action) => {
            state.loading = false;
            state.listUser = action.payload;
        });
        builder.addCase(getAllUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });


        //get a user
        builder.addCase(getUser.pending, state => {
            state.loading = true;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.UpdateUser = action.payload;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
        //add user
        builder.addCase(createUser.pending, state => {
            state.loading = true;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.listUser.push(action.payload);
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
        // delete user
        builder.addCase(deleteUser.pending, state => {
            state.loading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            const {id} = action.payload;
            if(id){
                state.listUser = state.listUser.filter((ele) => ele.userId !== id);
            }
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // update user
        builder.addCase(updateUser.pending, state => {
            state.loading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.listUser = state.listUser.map((ele) => 
                ele.id === action.payload.id ? action.payload : ele
            );
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    }
})


export default userSlice.reducer;