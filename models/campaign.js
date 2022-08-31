'use strict';

module.exports = function(sequelize, DataTypes) {
    var Campaign = sequelize.define(
      'Campaign',
      {
          creator_id: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
          name: { type: DataTypes.STRING },
          icon_url: { type: DataTypes.STRING },
          conversion_event: { type: DataTypes.STRING }
      },
      {
        paranoid: true,
        underscored: true,
        tableName: 'campaign',
      },
    );

    return Campaign;
};