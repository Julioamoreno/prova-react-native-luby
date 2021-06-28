import { configureStore } from '@reduxjs/toolkit';

import authentication from './reducers/authentication';
import loading from './reducers/loading';
import recentsSelectedGame from './reducers/recentSelectedGame';
import gameSelected from './reducers/gameSelected';
import gamePlayed from './reducers/gamePlayed';

const store = configureStore({
	reducer: {
		authentication: authentication.reducer,
		loading: loading.reducer,
		recents: recentsSelectedGame.reducer,
		selectedGame: gameSelected.reducer,
		gamePlayed: gamePlayed.reducer,
	},
});

export type State = ReturnType<typeof store.getState>;

export const authenticationAction = authentication.actions;
export const loadingAction = loading.actions;
export const recentsAction = recentsSelectedGame.actions;
export const gameSelectedAction = gameSelected.actions;
export const gamePlayedAction = gamePlayed.actions;

export default store;
