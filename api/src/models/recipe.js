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
				type: DataTypes.TEXT,
				allowNull: false,
				defaultValue:
					'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apps-recetas-cocina-aprender-esquire-recetas-vegetarianas-1522956381.jpg?crop=1xw:1xh;center,top&resize=980:*',
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			summary: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			healthScore: {
				type: DataTypes.FLOAT,
			},
			steps: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
		},
		{ freezeTableName: true, timestamps: false },
	);
};
