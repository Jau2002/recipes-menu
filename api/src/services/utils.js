const axios = require('axios').default;
const { Recipe, Diet } = require('../db');

const { API_KEY_TEMP_1 } = process.env;

async function allDataApi() {
	const response = await axios.get(
		`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_TEMP_1}&addRecipeInformation=true&number=100`
	);
	const captureData = response.data.results.map((d) => ({
		id: d.id,
		name: d.title,
		summary: d.summary,
		healthScore: d.healthscore,
		steps: d.analyzedInstructions[0]?.step?.map((s) => s.step),
		img: d.image,
		diets: d.diets?.map((d) => d),
		types: d.dishTypes?.map((t) => t),
	}));
	return captureData;
}

async function Database() {
	const tableDiets = await Recipe.findAll({
		includes: {
			model: Diet,
		},
	});
	const mapDataDb = tableDiets?.map((r) => ({
		id: r.id,
		name: r.name,
		summary: r.summary,
		healthScore: r.healthScore,
		steps: r.steps,
		img: r.image,
		diets: r.diets?.map((d) => d.name),
		types: r.dishTypes?.map((d) => d.name),
	}));
	return mapDataDb;
}

const allRecipes = async () => {
	const api = await allDataApi();
	const db = await Database();
	const allData = api.concat(db);
	return allData;
};

module.exports = { allRecipes };
