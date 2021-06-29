import { createSlice } from '@reduxjs/toolkit';

interface CartTotalModel {
	total: number;
}

const initialState = {
	total: 0,
} as CartTotalModel;

const slice = createSlice({
	name: 'CartTotal',
	initialState,
	reducers: {
		increment(state, action) {
			state.total += action.payload.price;
		},
		decrement(state, action) {
			state.total -= action.payload.price;
		},
		clear(state) {
			state.total = 0;
		},
	},
});

export const CartTotal = slice.actions;

export default slice;
