import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  authenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  authenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<AuthState>) {
      state.authenticated = true;
      state.token = action.payload.token;
    },
    logout(state) {
      state.authenticated = false;
      state.token = null;
    },
  },
});

export const {setToken, logout} = authSlice.actions;

export default authSlice.reducer;
