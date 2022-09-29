import axios from 'axios';
import {
	FILTER_BY_DIET,
	FILTER_BY_NAME,
	FILTER_BY_SCORE,
	GET_ALL_DIETS,
	GET_ALL_RECIPES,
	GET_RECIPE_BY_NAME,
	GET_RECIPE_DETAIL,
} from '../constants';

function getAllRecipes() {
	return async (dispatch) => {
		const response = await axios.get('http://localhost:3001/recipes');

		return dispatch({ type: GET_ALL_RECIPES, payload: response.data });
	};
}

function getRecipeByName(name) {
	return async (dispatch) => {
		const response = await axios.get(
			`http://localhost:3001/recipes?name=${name}`
		);

		try {
			return dispatch({ type: GET_RECIPE_BY_NAME, payload: response.data });
		} catch (err) {
			throw new Error(err);
		}
	};
}

function getRecipeDetail(id) {
	return async (dispatch) => {
		const response = await axios.get(`http://localhost:3001/recipes/${id}`);

		try {
			return dispatch({ type: GET_RECIPE_DETAIL, payload: response.data });
		} catch (err) {
			throw new Error(err);
		}
	};
}

function postRecipe(payload) {
	return async () => {
		try {
			const create = await axios.post('http://localhost:3001/recipes', payload);
		} catch (err) {
			throw new Error(err);
		}

		return create;
	};
}

function getAllDiets() {
	return async (dispatch) => {
		const response = await axios.get('http://localhost:3001/diets');

		return dispatch({ type: GET_ALL_DIETS, payload: response.data });
	};
}

function filterByDiet(payload) {
	return { type: FILTER_BY_DIET, payload };
}

function filterByName(payload) {
	return { type: FILTER_BY_NAME, payload };
}

function filterByScore(payload) {
	return { type: FILTER_BY_SCORE, payload };
}

export {
	getAllRecipes,
	getRecipeByName,
	getRecipeDetail,
	postRecipe,
	getAllDiets,
	filterByDiet,
	filterByName,
	filterByScore,
};
