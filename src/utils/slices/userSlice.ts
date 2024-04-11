import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {User} from '../../types';

interface SignUpState {
  user: User | null;
}

const initialState: SignUpState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = {
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        username: action.payload.username,
        image: action.payload.image,
        gender: action.payload.gender,
      };
    },
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
