import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../requestMethods";

// Async thunk for registration
export const register = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      const response = await publicRequest.post("/auth/register", user);
      return response.data;
    } catch (error) {
      let message;
      if (error.response && error.response.data.message) {
        message = error.response.data.message;
      } else {
        message = error.message;
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Initial state for the slice
const initialState = {
  currentUser: null,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

// User slice for Redux toolkit
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Proper reducer functions
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    signOut: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
    },
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.errorMessage = "";
    },
    // Other reducers can be added here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isFetching = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.currentUser = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(register.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

// Export the actions
export const { clearState, loginStart, loginSuccess, loginFailure, signOut } =
  userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer;
