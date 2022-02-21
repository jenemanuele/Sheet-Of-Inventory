// import all models
const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');

// Create associations between the models
Product.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});


module.exports = { User, Category, Product };