import axios from 'axios';
import authHeader from './auth_header';

const API_URL = 'http://192.168.1.3:3000/';

const register = async (username, email, password) => {
  const res = await axios.post(API_URL + 'auth/register', {
    username,
    email,
    password,
  });
};

const login = async (username, password) => {
  console.log('login',username, password);
  try {
    const res = await axios.post(API_URL + 'auth/login', {
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
      console.error('Login error: Server responded with status', error.response.status);
    } else if (error.request) {
      console.error('Login error: Request was made but no response was received', error.request);
    } else {
      console.error('Login error:', error.message);
    }
    throw error;
  }
  
};

const update = async (username, email, phone, address) => {
  try {
    console.log('updateee');
    const res = await axios.patch(API_URL + 'user/update', {
      username,
      email,
      phone,
      address
    },
    {headers: authHeader() }
    )
    console.log('update res', res);
    if (res.data) {
      return res.data
    } else {
      console.log('update errorr');
      return 
    }
  } catch (error) {
    console.log('update errorrr', error);
    throw error
  }
}

const logout = async () => {
  try {
    console.log('Logout successful');
    return {};
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

const authService = {
  register,
  login,
  update,
  logout,
};

export default authService;