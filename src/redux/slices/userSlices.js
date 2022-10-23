import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
  'users/fetchUserStatus',
  async (login) => {
    const { data } = await axios.get(`https://api.github.com/users/${login}`);
    return data;
  }
);

const initialState = {
  login: '',
  user: {},
  status: 'loading', //loading | success | error
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin(state, action) {
      state.login = action.payload;
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = 'loading';
      state.user = {};
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = 'success';
      state.user = action.payload;
    },
    [fetchUser.rejected]: (state) => {
      state.status = 'error';
      state.user = {};
    },
  },
});

export const { setLogin } = userSlice.actions;

export default userSlice.reducer;
