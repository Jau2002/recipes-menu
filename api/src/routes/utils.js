const axios = require('axios').default;
const { Recipe, Diet } = require('../db');
const { API_KEY_0 } = process.env;

const CREATED = 201;
const NOT_FOUND = 404;

const allDataDishes = async () => {
	const response = await axios.get(
		`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_0}&addRecipeInformation=true&number=100`,
	);
	const foods = response.data.results.map((e) => {
		return {
			id: e.id,
			name: e.title,
			summary: e.summary,
			healthScore: e.healthscore,
			steps: e.analyzedInstructions[0]?.step?.map((s) => s.step),
			img: e.image,
			diets: e.diets?.map((d) => d),
			cuisines: e.cuisines?.map((c) => c),
			types: e.dishTypes?.map((t) => t),
		};
	});
	return foods;
};

const allDataBase = async () => {
	const modelDiets = await Recipe.findAll({
		includes: {
			model: Diet,
		},
	});
	const mapInfoDb = modelDiets?.map((r) => {
		return {
			id: r.id,
			name: r.name,
			summary: r.summary,
			healthScore: r.healthScore,
			steps: r.steps,
			img: r.image,
			diets: r.diets?.map((d) => d.name),
			cuisines: r.cuisines?.map((c) => c),
			types: r.dishTypes?.map((d) => d.name),
			createInDb: r.createInDb,
		};
	});
	return mapInfoDb;
};

const allRecipes = async () => {
	const dataApi = await allDataDishes;
	const dataDb = await allDataBase;
	return [...dataApi, ...dataDb];
};

module.exports = { CREATED, NOT_FOUND, allRecipes };
