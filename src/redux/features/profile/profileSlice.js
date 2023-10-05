import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    gender: '',
    birthday: '',
    description: '',
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setBirthday: (state, action) => {
            state.birthday = action.payload
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        }
    }
})

const { actions, reducer } = profileSlice;

export const { setName, setGender, setBirthday, setDescription } = actions;

export default reducer;