'use strict';

module.exports = (sequelize, DataTypes) => {
  const FilmRelation = sequelize.define('FilmRelation', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    film_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Film',
        key: 'id'
      }
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
    tableName: 'film_relation',
    freezeTableName: true,
    timestamps: false
  });

  FilmRelation.associate = function (models) {
    FilmRelation.belongsTo(models.People, {
      foreignKey: 'relation_id',
      constraints: false,
      as: 'filmCharacter'
    })

    FilmRelation.belongsTo(models.Planet, {
      foreignKey: 'relation_id',
      constraints: false,
      as: 'filmPlanet'
    })

    FilmRelation.belongsTo(models.Specie, {
      foreignKey: 'relation_id',
      constraints: false,
      as: 'filmSpecie'
    })

    FilmRelation.belongsTo(models.Starship, {
      foreignKey: 'relation_id',
      constraints: false,
      as: 'filmStarship'
    })

    FilmRelation.belongsTo(models.Vehicle, {
      foreignKey: 'relation_id',
      constraints: false,
      as: 'filmVehicle'
    })
  }

  return FilmRelation
}