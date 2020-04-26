'use strict';

module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    cargo_capacity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    consumables: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost_in_credits: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created: {
      type: DataTypes.STRING,
      allowNull: false
    },
    crew: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edited: {
      type: DataTypes.STRING,
      allowNull: true
    },
    length: {
      type: DataTypes.STRING,
      allowNull: false
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    max_atmosphering__speed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passengers: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vehicle_class: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'vehicle',
    freezeTableName: true,
    timestamps: false
  });

  return Vehicle;
};