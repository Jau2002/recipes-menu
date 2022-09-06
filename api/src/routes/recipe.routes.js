const { Router } = require('express');
const { allRecipes } = require('../services/utils');
const { Recipe, Diet } = require('../db');
const {
	CONFLICT,
	NOT_FOUND,
	BAD_REQUEST,
	CREATED,
	UNPROCESSABLE_ENTITY,
} = require('../services/protocol');

const routerRecipes = Router();

routerRecipes.get('/', async (req, res) => {
	const { name } = req.query;
	const recipes = await allRecipes();
	try {
		if (name) {
			const filterByQuery = recipes.filter((dish) =>
				dish.name?.toUpperCase().includes(name.toUpperCase()),
			);
			return filterByQuery.length
				? res.send(filterByQuery)
				: res.status(CONFLICT).send({ message: `There is ${name} no recipe` });
		}
		return res.send(recipes);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: err.message });
	}
});

routerRecipes.get('/:id', async (req, res) => {
	const { id } = req.params;
	const recipes = await allRecipes();
	try {
		const FilterById = recipes.filter(
			(recipe) => recipe.id === Number.parseInt(id, 10),
		);
		return FilterById.length
			? res.send(FilterById)
			: res
					.status(BAD_REQUEST)
					.send({ message: `Recipe with id: ${id} doesn't match` });
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: err.message });
	}
});

routerRecipes.post('/', async (req, res) => {
	const { name, summary, healthScore, steps, img, diets } = req.body;
	try {
		const newRecipe = await Recipe.create({
			name,
			summary,
			healthScore,
			steps,
			img,
		});
		const dietsDb = await Diet.findAll({
			where: {
				name: diets,
			},
		});
		newRecipe.addDiet(dietsDb);
		return res.status(CREATED).send({ message: 'Diet created successfully' });
	} catch (err) {
		return res.status(UNPROCESSABLE_ENTITY).send({ message: err.message });
	}
});

module.exports = routerRecipes;
