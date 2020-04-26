'use strict';

module.exports = (sequelize, DataTypes) => {
  const PeopleRelation = sequelize.define('PeopleRelation', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    people_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    relation_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edited: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'people_relation',
    freezeTableName: true,
    timestamps: false
  });

  PeopleRelation.associate = function (models) {
    PeopleRelation.belongsTo(models.Specie, {
      foreignKey: 'relation_id',
      constraints: false,
      as: 'peopleSpecie'
    })

    PeopleRelation.belongsTo(models.Starship, {
      foreignKey: 'relation_id',
      constraints: false,
      as: 'peopleStarship'
    })

    PeopleRelation.belongsTo(models.Vehicle, {
      foreignKey: 'relation_id',
      constraints: false,
      as: 'peopleVehicle'
    })
  }

  return PeopleRelation
}