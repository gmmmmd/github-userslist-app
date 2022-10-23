import { configureStore } from '@reduxjs/toolkit';

import auth from './slices/authSlice';
import modal from './slices/modalSlice';
import user from './slices/userSlices';
import users from './slices/usersSlices';

export const store = configureStore({
  reducer: {
    auth,
    users,
    user,
    modal,
  },
});
