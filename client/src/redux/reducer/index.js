import { GET_ALL_RECIPES, GET_RECIPE_BY_NAME } from '../constants';

const initialState = {
	recipe: [],
	allRecipes: [],
};

function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_ALL_RECIPES:
			return { ...state, allRecipes: payload, recipe: payload };

		case GET_RECIPE_BY_NAME:
			return { ...state, recipe: payload || [] };

		default:
			return { ...state };
	}
}

export default rootReducer;
