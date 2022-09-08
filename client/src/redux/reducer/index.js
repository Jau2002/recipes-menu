import { GET_ALL_RECIPES } from '../constants';

const initialState = {
	recipe: [],
	allRecipes: [],
};

function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_ALL_RECIPES:
			return { ...state, allRecipes: payload, recipe: payload };

		default:
			return { ...state };
	}
}

export default rootReducer;
