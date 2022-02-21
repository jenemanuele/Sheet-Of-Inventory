// import all models
const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');

// Create associations between the models
// User-Category relationship
User.hasMany(Category, {
  foreignKey: 'user_id'
});
//Category-User relationship
Category.belongsTo(User, {
  foreignKey: 'user_id'
});

// Product-User relationship
Product.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
  hooks:true
});

// Product-Category relationship
Product.belongsTo(Category, {
  foreignKey: 'Category_id',
  onDelete: 'cascade',
  hooks: true
});

// User-Product relationsihp
User.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
  hooks:true
});

// Category-Product relationship
Product.hasMany(Product, {
  foreignKey: 'product_name',
  onDelete: 'cascade',
  hooks:true
})


module.exports = { User, Category, Product };