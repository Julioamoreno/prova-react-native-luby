import { createSlice } from '@reduxjs/toolkit';
import FormatString from '../../shared/format/Number';

interface StateGameSelected {
	numbersSelected: Array<string> | [];
	id: number;
	type: null | string;
	price: number;
	max_number: number;
	range: number;
	color: string;
	min_cart_value: number;
	description: string;
}

let initialState = {
	numbersSelected: [],
	// id: 0,
	// type: null,
	// price: 0,
	// max_number: 0,
	// range: 0,
	// color: '',
	// min_cart_value: 0,
	// description: '',
} as StateGameSelected;

const getNumberAvailable = (state: StateGameSelected) => {
	let numbers: Array<string> = [];
	for (let index = 1; index <= state.range; index++) {
		numbers.push(FormatString(index.toString()));
	}

	if (state.numbersSelected.length > 0) {
		state.numbersSelected.map((number: string) => {
			return numbers.splice(numbers.indexOf(number), 1);
		});
	}
	return numbers;
};

const slice = createSlice({
	name: 'GamePlayed',
	initialState,
	reducers: {
		setGamePlayed(state, action) {
			state.id = action.payload.game.id;
			state.type = action.payload.game.type;
			state.price = action.payload.game.price;
			state.range = action.payload.game.range;
			state.max_number = action.payload.game.max_number;
			state.min_cart_value = action.payload.game.min_cart_value;
			state.color = action.payload.game.color;
			state.description = action.payload.game.description;
			state.numbersSelected = [];
		},
		setNumberSelected(state, action) {
			if (
				state.max_number > state.numbersSelected.length &&
				!state.numbersSelected.includes(action.payload.numbersSelected)
			) {
				state.numbersSelected.push(action.payload.numbersSelected);
				state.numbersSelected = state.numbersSelected.sort();
			} else if (
				state.numbersSelected.includes(action.payload.numbersSelected)
			) {
				state.numbersSelected.splice(
					state.numbersSelected.indexOf(action.payload.numbersSelected),
					1
				);
			}
		},
		unSelectNumber(state, action) {
			state.numbersSelected.splice(
				state.numbersSelected.indexOf(action.payload.number),
				1
			);
		},
		completeGame(state) {
			const numbersAvailable = getNumberAvailable(state);
			const remaining = state.max_number - state.numbersSelected.length;
			let values = [];
			let i = 1;
			while (i <= remaining) {
				i++;
				let valueRandom = Math.floor(Math.random() * numbersAvailable.length);
				values.push(numbersAvailable[valueRandom]);
				numbersAvailable.splice(valueRandom, 1);
			}
			state.numbersSelected.sort().push(...values.sort());
			state.numbersSelected.sort();
		},
		clearGame(state) {
			state.numbersSelected = [];
		},
		reset: () => {
			return {
				numbersSelected: [],
			} as StateGameSelected;
		},
	},
});

export const GamePlayed = slice.actions;

export default slice;
