'use strict';

module.exports = function(sequelize, DataTypes) {
    var Media = sequelize.define(
        'Media',
        {
            media_type: { type: DataTypes.TEXT },
            media_url: { type: DataTypes.TEXT },
        },
        {
            paranoid: true,
            underscored: true,
            tableName: 'media',
        },
    );

    return Media;
};