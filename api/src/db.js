require('dotenv').config();
const { Sequelize } = require('sequelize');
const { readdirSync } = require('fs');
const { basename, join } = require('path');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`,
	{ logging: false, native: false },
);
const baseName = basename(__filename);

const modelDefiners = [];

readdirSync(join(__dirname, '/models'))
	.filter(
		(file) =>
			file.indexOf('.') !== 0 && file !== baseName && file.slice(-3) === '.js',
	)
	.forEach((file) => {
		modelDefiners.push(require(join(__dirname, '/models', file)));
	});

modelDefiners.forEach((model) => model(sequelize));

const entries = Object.entries(sequelize.models);
const capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Recipe, Diet } = sequelize.models;

Diet.belongsToMany(Recipe, { through: 'Recipe_diet' });
Recipe.belongsToMany(Diet, { through: 'Recipe_diet' });

module.exports = {
	...sequelize.models,
	conn: sequelize,
};
