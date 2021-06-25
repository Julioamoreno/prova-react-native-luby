import { configureStore } from '@reduxjs/toolkit';

import authentication from './reducers/authentication';
import loading from './reducers/loading';
import recentsSelectedGame from './reducers/recentSelectedGame';

const store = configureStore({
	reducer: {
		authentication: authentication.reducer,
		loading: loading.reducer,
		recents: recentsSelectedGame.reducer,
	},
});

export type State = ReturnType<typeof store.getState>;

export const authenticationAction = authentication.actions;
export const loadingAction = loading.actions;
export const recentsAction = recentsSelectedGame.actions;

export default store;
