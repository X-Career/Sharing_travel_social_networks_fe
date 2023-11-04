import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Ip - Tinh
const API_URL = 'http://192.168.1.25:3000/';

//Ip - Phuong
// const API_URL = 'http://192.168.1.14:3000/';

//Ip - Minh
// const API_URL = 'http://192.168.1.8:3000/';

export const fetchPosts = createAsyncThunk(
    'newsfeed/posts',
    async (page) => {

        const res = await fetch(API_URL + `newsfeed/posts?page=${page}`)

        const data = await res.json();
        return {posts: data.posts, page};
    }
)


const postsSlice = createSlice({
    name: 'posts',
    initialState: { posts: [], error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {

                state.posts = action.payload.page === 1 ? action.payload.posts : state.posts.concat(action.payload.posts);
            })
            // .addCase(fetchPosts.fulfilled, (state, action) => {
            //     const getPosts = action.payload.page === 1 ? action.payload.posts : state.posts.concat(action.payload.posts);

            //     state.posts = getPosts.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
            // })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.error.message;
            })
    }
})

const { reducer } = postsSlice;

export default reducer;