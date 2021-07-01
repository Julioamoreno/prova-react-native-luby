import { createSlice } from '@reduxjs/toolkit';

interface StateGameSelected {
	gameType: number[];
}

let initialState = { gameType: [] } as StateGameSelected;

const slice = createSlice({
	name: 'GameSelected',
	initialState,
	reducers: {
		setGameSelected(state, action) {
			state.gameType.splice(state.gameType.indexOf(action.payload.id), 1);
		},
		setGameSelectedNewBet(state, action) {
			state.gameType = [action.payload.id];
		},
	},
});

export const GameSelected = slice.actions;

export default slice;
