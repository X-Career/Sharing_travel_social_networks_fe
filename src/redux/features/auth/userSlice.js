import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { setMessage } from './message';
import authService from '../../../services/auth_service';


export const register = createAsyncThunk(
  'auth/register',
  async ({username, email, password}, thunkAPI) => {
    try {
      console.log('abc');
      const res = await authService.register(username, email, password);
      thunkAPI.dispatch(setMessage(res.data.message));
      // log
      console.log(res.data);
      return res.data;
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      thunkAPI.dispatch(setMessage(message));
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async ({username, password}, thunkAPI) => {
    try {
      const data = await authService.login(username, password);
      // console.log('Login data: ', data);
      return {user: data}
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      thunkAPI.dispatch(setMessage(message));
    }
  },
);

export const readProfile = createAsyncThunk(
  'auth/current',
  async ({ avatar, fullname, username, email, gender, birthday, description }, thunkAPI) => {
    try {
      const data = await authService.readProfile(avatar, fullname, username, email, gender, birthday, description);
      const userData = await data.json()
      // console.log('userData:', userData)
      // return userData;
      return {user: userData};
    } catch (e) {
      const message =
      (e.response && e.response.data && e.response.data.message) ||
      e.message ||
      e.toString();
    thunkAPI.dispatch(setMessage(message));
    }
  }
)

export const update = createAsyncThunk(
  'auth/update',
  async ({avatar, birthday, description, fullname, gender}, thunkAPI) => {
    try {
      const data = await authService.update(avatar, birthday, description, fullname, gender);
      console.log('Slice update data', data);
      console.log('Slice update data.data', data.data);
      return {user: data}
      // return  data
    } catch (e) {
      const message =
      (e.response && e.response.data && e.response.data.message) ||
      e.message ||
      e.toString();
    thunkAPI.dispatch(setMessage(message));
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    const data = await authService.logout();
    console.log('logout data', data);
    return {user: data}
  } catch (e) {
    const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      thunkAPI.dispatch(setMessage(message));
  }
});

export const uploadAvatar = createAsyncThunk('auth/cloudinary-upload/avatar', async ({ avatar }) => {
  try {
    
    const data = await authService.uploadAvatar(avatar)
    console.log('Slice avatar: ', data);
    return {user: data}
  } catch (e) {
    const message = (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
    thunkAPI.dispatch(setMessage(message))
  }

})

//wait
const initialState = {
  user: null,
  isLoggedIn: false
}


const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.user = action.payload.user
        // state.user = action.payload
      })
      .addCase(update.rejected, (state, action) => {
        console.error('Update rejected:', action.error);
      })

      .addCase(readProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(readProfile.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
      state.user = action.payload.user
      })
      .addCase(uploadAvatar.rejected, (state, action) => {
      state.error = action.error.message
    })
  },
});



const {reducer} = authSlice;
export default reducer;
