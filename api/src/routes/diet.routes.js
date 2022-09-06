const { Router } = require('express');
const { Diet } = require('../db');
const { NOT_FOUND } = require('../services/protocol');

const routerDiets = Router();

routerDiets.get('/', async (_, res) => {
	const allDiets = await Diet.findAll();
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
		res.send(allDiets);
	} catch (err) {
		res.status(NOT_FOUND).send({ message: err.message });
	}
});

module.exports = routerDiets;
