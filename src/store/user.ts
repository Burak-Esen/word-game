import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginReq } from '@src/lib/getData/user';
import axios from 'axios';
import { removeUserData, savedUserStorage, setAllUserData } from './local';

export type UserLocalStorage = {
  user: {
    username: string;
    role: Array<string>;
  };
  token: string;
  loginDate: string;
}

interface IState extends UserLocalStorage {
  isLoggedIn: boolean,
  isError: boolean,
  errorMessage: string
}


const initialState: IState = {
  ...savedUserStorage,
  isLoggedIn: savedUserStorage.loginDate &&
    (new Date().getTime() -  new Date(savedUserStorage.loginDate).getTime() < 86_400_000) ?
    true : false,
  isError: false,
  errorMessage: ''
};

export const login = createAsyncThunk(
  'user/login',
  async (data: ICredentials) => {
    try {
      const payload = (await loginReq(data)).data;
      return payload;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return err.response?.data;
      }
    };
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser(state) {
      state.isLoggedIn = false;
      state.loginDate = '';
      state.token = '';
      state.user = { username: '', role: [] };
      removeUserData();
    },
    setIsError(state, action) {
      state.isError = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload && action.payload.token && action.payload.user) {
        state.isLoggedIn = true;
        state.loginDate = new Date().toJSON();
        state.token = action.payload.token;
        state.user = action.payload.user;
        setAllUserData(state);
      } else if (action.payload && action.payload.error) {
        state.isError = true;
        state.errorMessage = action.payload.error;
      }
    });
  }
});

export const { removeUser, setIsError } = userSlice.actions;
export default userSlice.reducer;
