const { Product } = require('../models');

const acousticGuitars = [
    {
        // guitar_id: 6,
        brand: 'Martin',
        product_name: 'D28 Acoustic',
        price: 2999,
        color: 'Sunburst',
        body_type: 'long'
    },
    {
        brand: 'Martin',
        product_name: 'LX1 Little Martin',
        price: 339,
        color: 'Natural',
        body_type: 'long'
    },
    {
        brand: 'Taylor',
        product_name: 'GS Mini-e Koa Plus',
        price: 1099,
        color: 'Shaded Edgeburst',
        body_type: 'long'
    },
    {
        brand: 'Taylor',
        product_name: 'Baby Mahogany BT2',
        price: 399,
        color: 'Mahogany',
        body_type: 'long'
    },
    {
        brand: 'Guild',
        product_name: 'D-1212',
        price: 779,
        color: 'Natural',
        body_type: 'long'
    }
];

const seedAcoustic = () => Acoustic.bulkCreate(acousticGuitars);

module.exports = seedAcoustic;