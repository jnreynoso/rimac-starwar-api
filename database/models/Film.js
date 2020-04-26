'use strict';

module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
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

  Film.associate = function (models) {
    Film.hasOne(models.FilmRelation, {
      foreignKey: 'film_id'
    })

    Film.hasMany(models.FilmRelation, {
      foreignKey: 'relation_id',
      constraints: false,
      scope: {
        relation: 'people'
      }
    })

    Film.hasMany(models.FilmRelation, {
      foreignKey: 'relation_id',
      constraints: false,
      scope: {
        relation: 'planet'
      }
    })

    Film.hasMany(models.FilmRelation, {
      foreignKey: 'relation_id',
      constraints: false,
      scope: {
        relation: 'specie'
      }
    })

    Film.hasMany(models.FilmRelation, {
      foreignKey: 'relation_id',
      constraints: false,
      scope: {
        relation: 'starship'
      }
    })

    Film.hasMany(models.FilmRelation, {
      foreignKey: 'relation_id',
      constraints: false,
      scope: {
        relation: 'vehicle'
      }
    })


  }

  return Film;
};