import { createSlice } from '@reduxjs/toolkit';

import GameCartModel from '../../models/gameCart';
const initialState = [] as GameCartModel;

const slice = createSlice({
	name: 'Cart',
	initialState,
	reducers: {
		newItemCart(state, action) {
			state.push({
				game_id: action.payload.game_id,
				type: action.payload.type,
				numbers: action.payload.numbers,
				price: action.payload.price,
				color: action.payload.color,
				total: action.payload.total,
				minCartValue: action.payload.minCartValue,
			});
		},
		deleteItemChart(state, action) {
			state.splice(action.payload.id, 1);
		},
		clearCart: () => {
			return initialState;
		},
	},
});

export const Cart = slice.actions;

export default slice;
