import {
	configureStore,
	getDefaultMiddleware,
	combineReducers,
} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import authentication from './reducers/authentication';
import loading from './reducers/loading';
import recentsSelectedGame from './reducers/recentSelectedGame';
import gameSelected from './reducers/gameSelected';
import gamePlayed from './reducers/gamePlayed';
import cartGame from './reducers/cartGame';
import cartTotal from './reducers/cartTotal';
import loadDataApi from './reducers/loadDataApi';

const reducers = combineReducers({
	authentication: authentication.reducer,
	loading: loading.reducer,
	recents: recentsSelectedGame.reducer,
	selectedGame: gameSelected.reducer,
	gamePlayed: gamePlayed.reducer,
	cartGame: cartGame.reducer,
	cartTotal: cartTotal.reducer,
	loadDataApi: loadDataApi.reducer,
});

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['authentication'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});

export type State = ReturnType<typeof store.getState>;

export const authenticationAction = authentication.actions;
export const loadingAction = loading.actions;
export const recentsAction = recentsSelectedGame.actions;
export const gameSelectedAction = gameSelected.actions;
export const gamePlayedAction = gamePlayed.actions;
export const cartGameAction = cartGame.actions;
export const cartTotalAction = cartTotal.actions;
export const loadDataApiAction = loadDataApi.actions;

export default store;
