import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  isAuth: false,
  errors: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action) {
      state.name = action.payload;
      state.isAuth = true;
    },
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const { setAuth, setIsAuth, setErrors } = authSlice.actions;

export default authSlice.reducer;
