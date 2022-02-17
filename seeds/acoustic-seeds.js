const { Product } = require('../models');

const productData = [
    {
        product_name: 'D28 Acoustic',
        category_id: 1,
        cost: 2999,
        body_type: 'long',
        brand: 'Martin'
    },
    {
        product_name: 'D263ustic',category_id: 1,
        cost: 2955,
        body_type: 'long',
        brand: 'Martin'
    },
    {
        product_name: 'D26 Acoustic',category_id: 1,
        cost: 2449,
        body_type: 'long',
        brand: 'Martin'
    },
    {
        product_name: 'D27 Acoustic',category_id: 1,
        cost: 2999,
        body_type: 'long',
        brand: 'Martin'
    },
    {
        product_name: 'D29 Acoustic',category_id: 1,
        cost: 23359,
        body_type: 'long',
        brand: 'Martin'
    }
];

const seedAcoustic = () => Acoustic.bulkCreate(productData);

module.exports = seedAcoustic;