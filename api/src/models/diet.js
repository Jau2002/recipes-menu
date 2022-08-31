const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'diet',
		{
			Name: { type: DataTypes.STRING, allowNull: false },
		},
		{ freezeTableName: true, timestamps: false },
	);
};
