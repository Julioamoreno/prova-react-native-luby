import { createSlice } from '@reduxjs/toolkit';
import User from '../../models/user';

interface AuthenticationState {
	authenticated: boolean;
	user: User;
}

const initialState = {
	authenticated: false,
} as AuthenticationState;

const slice = createSlice({
	name: 'authentication',
	initialState,
	reducers: {
		login(state, action) {
			state.authenticated = true;
			state.user = action.payload.user;
		},
		logout(state) {
			state.authenticated = false;
		},
	},
});

export const authenticationActions = slice.actions;

export default slice;
