import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/IUser';

interface AppState {
  loading: boolean
  error: string
  auth: boolean
  user: IUser | null,
  messages: string[]
}

const initialState: AppState = {
  loading: false,
  error: '',
  auth: false,
  user: null,
  messages: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchingSuccess(state) {
      state.loading = false;
    },
    fetchingError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    login(state, action: PayloadAction<boolean>) {
      state.auth = action.payload;
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    getMessage(state, action: PayloadAction<string>) {
      state.messages = [...state.messages, action.payload];
    }
  }
});

export default appSlice.reducer
