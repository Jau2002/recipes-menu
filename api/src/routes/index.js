const { Router } = require('express');
const routerDiets = require('./diet.routes');
const routerRecipes = require('./recipe.routes');

const router = Router();

router.use('/diet', routerDiets);

router.use('/recipes', routerRecipes);

module.exports = router;
