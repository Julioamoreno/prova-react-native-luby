import { createSlice } from '@reduxjs/toolkit';

interface AuthenticationState {
	authenticated: boolean;
}

const initialState = {
	authenticated: false,
} as AuthenticationState;

const slice = createSlice({
	name: 'authentication',
	initialState,
	reducers: {
		login(state) {
			state.authenticated = true;
		},
		logout(state) {
			state.authenticated = false;
		},
	},
});

export const authenticationActions = slice.actions;

export default slice;
