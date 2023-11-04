import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/userSlice';
import readProfileReducer from '../features/auth/userSlice';
import postsReducer from '../features/newsfeed/postsSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: readProfileReducer,
        posts: postsReducer,
    }
})