import { createSlice } from '@reduxjs/toolkit';

interface SelectedGameState {
	id: number[];
}

const initialState = { id: [] } as SelectedGameState;

const slice = createSlice({
	name: 'recentsSelectedGame',
	initialState,
	reducers: {
		setGame(state, action) {
			if (state.id.length !== 0) {
				if (state.id.includes(action.payload.id)) {
					state.id.splice(state.id.indexOf(action.payload.id), 1);
					return;
				}
			}
			state.id.push(action.payload.id);
		},
		clearGame(state) {
			state.id = [];
		},
	},
});

export const recentsSelectedGameActions = slice.actions;

export default slice;
