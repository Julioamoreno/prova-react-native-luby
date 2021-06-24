import { configureStore } from '@reduxjs/toolkit';

import authentication from './reducers/authentication';
import loading from './reducers/loading';

const store = configureStore({
	reducer: {
		authentication: authentication.reducer,
		loading: loading.reducer,
	},
});

export type State = ReturnType<typeof store.getState>;

export const authenticationAction = authentication.actions;
export const loadingAction = loading.actions;

export default store;
