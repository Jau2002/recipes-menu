const { DataTypes } = require('sequelize');

const recipeTable = (sequelize) => {
	// sequelize.define(
	// 	'recipe',
	// 	{
	// 		ID: { type: DataTypes.INTEGER, primaryKey: true },
	// 		name: { type: DataTypes.STRING, allowNull: false, unique: true },
	// 		summary: { type: DataTypes.STRING, allowNull: false },
	// 		healthScore: { type: DataTypes.FLOAT, defaultValue: 3.0 },
	// 	},
	// 	{ freezeTableName: true, timestamps: false },
	// );
};

module.exports = recipeTable;
