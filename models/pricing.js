'use strict';

module.exports = function(sequelize, DataTypes) {
    var Pricing = sequelize.define(
        'Pricing',
        {
            platform: { type: DataTypes.STRING },
            country: { type: DataTypes.STRING },
            price: { type: DataTypes.DECIMAL }
        },
        {
            paranoid: true,
            underscored: true,
            tableName: 'pricing',
        },
    );

    return Pricing;
};