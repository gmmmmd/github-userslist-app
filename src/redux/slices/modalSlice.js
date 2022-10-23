import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalActive: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setActive(state, action) {
      state.modalActive = action.payload;
    },
  },
});

export const { setActive } = modalSlice.actions;

export default modalSlice.reducer;
