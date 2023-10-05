import { configureStore } from '@reduxjs/toolkit';
import editReducer from '../features/profile/editSlice';
import profileReducer from '../features/profile/profileSlice';

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        // edit: editReducer,
    }
})