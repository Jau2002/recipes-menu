import { createReducer } from '@reduxjs/toolkit';
// import { allRecipes } from '../constants/';

const initialState = [];

const recipesReducer = createReducer(initialState, () => {
	// [allRecipes] = (state, { payload }) => {
	// 	state.push(payload);
	// };
});

export default recipesReducer;
