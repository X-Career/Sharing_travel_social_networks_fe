import axios from 'axios';
import authHeader from './auth_header';
import {API_URL} from '@env';

console.log('auth API_URL: ', API_URL);

const register = async (username, email, password) => {
  const res = await axios.post(`${API_URL}/auth/register`, {
    username,
    email,
    password,
  });
};

const login = async (username, password) => {
  console.log('Auth login:', username, password);
  try {
    // const res = await axios.post(API_URL + 'auth/login', {
    const res = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });
    if (res.data.accessToken) {
      return res.data;
    } else {
      console.log('Login error: No access token in the response');
      return null;
    }
  } catch (error) {
    if (error.response) {
      console.error(
        'Login error: Server responded with status',
        error.response.status,
      );
    } else if (error.request) {
      console.error(
        'Login error: Request was made but no response was received',
        error.request,
      );
    } else {
      console.error('Login error:', error.message);
    }
    throw error;
  }
};

const readProfile = async (
  avatar,
  fullname,
  username,
  email,
  gender,
  birthday,
  description,
) => {
  try {
    const res = await axios.get(
      `${API_URL}/current`,
      {avatar, fullname, username, email, gender, birthday, description},
      {headers: authHeader()},
    );
    const data = await res.json();

    if (res.data) {
      // return res.data
      console.log('readProfile auth: ', data);
      console.log('readProfile auth: ', res.data);
      return data;
    } else {
      return 'Error read profile';
    }
  } catch (e) {
    console.log('Catch error readProfile:', e);
    throw e;
  }
};

const update = async (birthday, description, fullname, gender) => {
  try {
    const headers = authHeader();
    const res = await axios.patch(
      `${API_URL}/user/update`,
      {
        birthday: birthday ? birthday : undefined,
        description: description ? description : undefined,
        fullname: fullname ? fullname : undefined,
        gender: gender ? gender : undefined,
      },

      {
        headers: authHeader(),
      },
    );
    if (res.data) {
      console.log('Auth update res.data: ', res.data);
      return res.data;
    } else {
      // console.log('update error else');
      return;
    }
  } catch (error) {
    if (error.response) {
      console.log('Err res data:', error.response.data);
      console.log('Err res status:', error.response.status);
      console.log('Err res headers:', error.response.headers);
    } else if (error.request) {
      console.log('Err request:', error.request)
    } else {
      console.log('Err message: ', error.message)
    }
    console.log('Err config: ', error.config);
    throw error;
  }
};

const logout = async () => {
  try {
    console.log('Logout successful');
    return {};
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

const uploadAvatar = async avatar => {
  try {
    const res = await axios.post(
      `${API_URL}/user/cloudinary-upload/avatar`,
      {avatar},
      {
        headers: authHeader(),
      },
    );
    console.log('uploadAvatar auth: ', res);
    return res.data;
  } catch (e) {
    console.log('UploadAvatar error: ', e);
  }
};

const getUserPost = async () => {
  try {
    const res = await axios.get(`${API_URL}/user/userPost`, {
      headers: authHeader(),
    });
    // console.log('getUserPost auth res: ', res)
    const data = res.data;
    // console.log('getUserPost auth data: ', data);
    return data;
  } catch (error) {
    console.error('getUserPost auth: ', error);
  }
};

const authService = {
  register,
  login,
  update,
  logout,
  readProfile,
  uploadAvatar,
  getUserPost,
};

export default authService;
