import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsersStatus',
  async () => {
    const { data } = await axios.get(
      'https://api.github.com/users?per_page=100'
    );
    return data;
  }
);

const initialState = {
  users: [],
  perPage: 10,
  currentPage: 1,
  status: 'loading', //loading | success | error
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = 'loading';
      state.users = [];
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = 'success';
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state) => {
      state.status = 'error';
      state.users = [];
    },
  },
});

export const { setUsers, setCurrentPage } = usersSlice.actions;

export default usersSlice.reducer;
