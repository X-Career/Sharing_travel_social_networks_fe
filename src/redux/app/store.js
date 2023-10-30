import { configureStore } from '@reduxjs/toolkit';
import editReducer from '../features/profile/editSlice';
import authReducer from '../features/auth/userSlice'
import profileReducer from '../features/profile/profileSlice';
import readProfileReducer from '../features/auth/userSlice';
import postsReducer from '../features/newsfeed/postsSlice';
export const store = configureStore({
    reducer: {
        profile: profileReducer,
        auth: authReducer,
        user: readProfileReducer,
        posts: postsReducer,
        // edit: editReducer,
    }
})