import { configureStore } from '@reduxjs/toolkit';
import editReducer from '../features/profile/editSlice';
import authReducer from '../features/auth/userSlice'
import profileReducer from '../features/profile/profileSlice';

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        auth: authReducer
        // edit: editReducer,
    }
})