import { configureStore } from '@reduxjs/toolkit';

import authentication from './reducers/authentication';

const store = configureStore({
	reducer: {
		authentication: authentication.reducer,
	},
});

export type State = ReturnType<typeof store.getState>;

export const authenticationAction = authentication.actions;

export default store;
