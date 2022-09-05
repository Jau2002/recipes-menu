const { Router } = require('express');
const { Diet } = require('../db');

const routerDiets = Router();

routerDiets.get('/', async (_, res) => {
	const diets = [
		'gluten free',
		'dairy free',
		'paleolithic',
		'ketogenic',
		'lacto ovo vegetarian',
		'vegan',
		'pescatarian',
		'primal',
		'fodmap friendly',
		'whole 30',
	];
	try {
		diets.forEach((diet) => {
			Diet.findOrCreate({
				where: {
					name: diet,
				},
			});
		});
		const allDiets = await Diet.findAll();
		res.send(allDiets);
	} catch (err) {
		throw new Error(err);
	}
});

module.exports = routerDiets;
