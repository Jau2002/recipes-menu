import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from '../features/recipe';

const store = configureStore({
	reducer: {
		recipe: recipesReducer,
	},
});

export default store;
