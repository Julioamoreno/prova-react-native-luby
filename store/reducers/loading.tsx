import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

const slice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		waitLoading: () => true,
		stopLoading: () => false,
	},
});

export const loadingActions = slice.actions;

export default slice;
