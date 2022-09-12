import {
	FILTER_BY_DIET,
	FILTER_BY_NAME,
	FILTER_BY_SCORE,
	GET_ALL_DIETS,
	GET_ALL_RECIPES,
	GET_RECIPE_BY_NAME,
	GET_RECIPE_DETAIL,
	POST_RECIPE,
} from '../constants';

const initialState = {
	recipe: [],
	recipesDetail: [],
	diets: [],
	allRecipes: [],
};

function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_ALL_RECIPES:
			return { ...state, allRecipes: payload, recipe: payload };

		case GET_RECIPE_BY_NAME:
			return { ...state, recipe: payload || [] };

		case GET_RECIPE_DETAIL:
			return { ...state, recipesDetail: payload };

		case POST_RECIPE:
			return { ...state };

		case GET_ALL_DIETS:
			return { ...state, diets: payload };

		case FILTER_BY_DIET:
			return {
				...state,
				recipe: {
					...state,
					recipe:
						payload === 'all'
							? [...state.allRecipes]
							: [...state.allRecipes].filter((dish) =>
									dish.diets.includes(payload)
							  ),
				},
			};

		case FILTER_BY_NAME:
			return payload === 'desc'
				? {
						...state,
						recipe: [...state.recipe].sort((a, b) =>
							a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1
						),
				  }
				: {
						...state,
						recipe: [...state.recipe].sort((a, b) =>
							a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
						),
				  };

		case FILTER_BY_SCORE:
			return payload === 'low'
				? {
						...state,
						recipe: [...state.recipe].sort((a, b) => {
							if (a.healthScore > b.healthScore) return 1;
							if (a.healthScore < b.healthScore) return -1;
							return 0;
						}),
				  }
				: {
						...state,
						recipe: [...state.recipe].sort((a, b) => {
							if (a.healthScore < b.healthScore) return 1;
							if (a.healthScore > b.healthScore) return -1;
							return 0;
						}),
				  };

		default:
			return { ...state };
	}
}

export default rootReducer;
