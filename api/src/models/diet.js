const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'diet',
		{
			name: {
				type: DataTypes.ENUM([
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
				]),
				allowNull: false,
			},
		},
		{ freezeTableName: true, timestamps: false },
	);
};
