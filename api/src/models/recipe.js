const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'recipe',
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				allowNull: false,
				defaultValue: DataTypes.UUIDV4,
			},

			img: {
				type: DataTypes.CHAR(255),
				allowNull: false,
				defaultValue: 'https://spoonacular.com/recipeImages/635350-240x150.jpg',
			},

			name: {
				type: DataTypes.STRING(128),
				allowNull: false,
			},

			summary: {
				type: DataTypes.TEXT,
				allowNull: false,
			},

			healthScore: {
				type: DataTypes.SMALLINT,
				allowNull: false,
				defaultValue: 0,
			},

			steps: {
				type: DataTypes.CHAR(255),
				allowNull: false,
			},
		},
		{ freezeTableName: true, timestamps: false }
	);
};
