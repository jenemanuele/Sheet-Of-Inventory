const { Category } = require('../models');

const categoryData = [
    {
      // category_id: 0
      category_name: 'Acoustic',
    },
    {
      // category_id: 1
      category_name: 'Electric',
    },
    {
      // category_id: 2
      category_name: 'Bass',
    },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;