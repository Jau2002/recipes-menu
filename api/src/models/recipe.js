const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'recipe',
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				allowNull: false,
				default: DataTypes.UUIDV4,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			summary: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			healthScore: {
				type: DataTypes.FLOAT,
			},
		},
		{ freezeTableName: true, timestamps: false },
	);
};
