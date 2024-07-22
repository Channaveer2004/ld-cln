import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    
    logout: (state) => {
      state.user = null;
    }
    
  }
});

// Exporting actions
export const { login,logout, } = userSlice.actions;

// Selector to get user from state
export const selectUser = (state) => state.user.user;

// Exporting reducer
export default userSlice.reducer;
