'use strict';

module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define('Film', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    created: {
      type: DataTypes.STRING,
      allowNull: false
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edited: {
      type: DataTypes.STRING,
      allowNull: true
    },
    episode_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    opening_crawl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    producer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'film',
    freezeTableName: true,
    timestamps: false
  });

  People.associate = function (models) {
    People.hasOne(models.FilmRelation, {
      foreignKey: 'film_id'
    })
  }

  return People;
};