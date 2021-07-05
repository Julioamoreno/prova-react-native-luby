import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

const slice = createSlice({
	name: 'loadDataApi',
	initialState,
	reducers: {
		loadData: () => true,
	},
});

export const loadDataAPIActions = slice.actions;

export default slice;
