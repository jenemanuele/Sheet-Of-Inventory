// import all models
const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');

//create associations
User.hasMany(Category, {
  foreignKey: 'user_id'
});

Category.belongsTo(User, {
  foreignKey: 'user_id',
});

Product.belongsTo(User, {
  foreignKey: 'user_id'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

User.hasMany(Product, {
  foreignKey: 'user_id'
});

Category.hasMany(Product, {
  foreignKey: 'category_id'
});

module.exports = { User, Category, Product };