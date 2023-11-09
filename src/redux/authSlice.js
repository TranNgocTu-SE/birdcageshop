import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const login = createAsyncThunk("login", async (data, rejectWithValue) => {
    const response = await fetch("https://localhost:44314/api/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    try {
        const result = await response.json();
        localStorage.setItem("user",JSON.stringify(result));
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }

})


export const registerUser = createAsyncThunk("registerUser", async (data, { rejectWithValue }) => {
    console.log(data);
    const response = await fetch("https://localhost:44314/api/v1/register", {
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

const initialState = {
    loading: false,
    userInfo: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : {},
    userToken: null,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('user') // deletes token from storage
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
          },
    },
    extraReducers: builder => {
        builder.addCase(login.pending, state => {
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.userInfo = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // register user
        builder.addCase(registerUser.pending, state => {
            state.loading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.listUser.push(action.payload);
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    }
})


export const {logout} = authSlice.actions;
export default authSlice.reducer;