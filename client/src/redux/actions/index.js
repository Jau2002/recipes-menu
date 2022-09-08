import axios from 'axios';
import { GET_ALL_RECIPES } from '../constants';

function getAllRecipes() {
	return async (dispatch) => {
		const response = await axios.get('http://localhost:3001/recipes');
		return dispatch({ type: GET_ALL_RECIPES, payload: response.data });
	};
}

const ar = 0;

export { getAllRecipes, ar };
