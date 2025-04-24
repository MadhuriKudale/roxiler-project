const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Store = require('./store');

const Rating = sequelize.define('Rating', {
  rating: { type: DataTypes.INTEGER, validate: { min: 1, max: 5 } }
});

Rating.belongsTo(User, { foreignKey: 'userId' });
Rating.belongsTo(Store, { foreignKey: 'storeId' });

module.exports = Rating;