import axios from 'axios';
import {
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

export { getAllRecipes, getRecipeByName, getRecipeDetail };
