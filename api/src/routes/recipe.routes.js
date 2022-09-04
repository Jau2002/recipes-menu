const { Router } = require('express');
const { allRecipes, NOT_FOUND, CREATED } = require('./utils');

const routerRecipes = Router();

routerRecipes.get('/', async (req, res) => {
	const { name } = req.query;
	const recipes = await allRecipes();
	try {
		if (name) {
			const filterByName = recipes.filter((dish) =>
				dish.name.toUpperCase().includes(name.toUpperCase()),
			);
			return dishFiltre
				? res.send(filterByName)
				: res.status(NOT_FOUND).send({ message: `There is ${name} no recipe` });
		}
		return res.send(recipes);
	} catch (err) {
		throw new Error(err);
	}
});

routerRecipes.get('/:id', async (req, res) => {
	const { id } = req.params;
	const recipes = await allRecipes();
	try {
		const FilterById = recipes.find((recipe) => recipe.id === Number(id));
		return FilterById
			? res.send(FilterById)
			: res
					.status(NOT_FOUND)
					.send({ message: `Recipe with id: ${id} doesn't match` });
	} catch (err) {
		throw new Error(err);
	}
});

routerRecipes.post('/', async (req, res) => {
	const { name, summary, healthScore, step, img, diets } = req.body;
	try {
		const newRecipe = await recipe.create({
			name,
			summary,
			healthScore,
			step,
			img,
			diets,
		});
		const dietsDb = await Diet.findALl({
			where: {
				name: diets,
			},
		});
		newRecipe.addDiet(dietsDb);
		return res.status(CREATED).send({ message: 'Diet Created Successfully' });
	} catch (err) {
		throw new Error(err);
	}
});

module.exports = routerRecipes;
