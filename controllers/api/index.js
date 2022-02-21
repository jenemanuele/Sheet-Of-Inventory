// Routes: user, instrument(i.e. guitar), category(i.e. eletric), brand(i.e. Fender), item (the specific guitar)
const router = require('express').Router();

const userRoutes = require('./user-routes');
const productRoutes = require('./product-routes');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
module.exports = router;