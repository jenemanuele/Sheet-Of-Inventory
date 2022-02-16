const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Category, Product } = require('../models');
const withAuth = require('../utils/auth');

// get all categories for dashboard
// /dashboard/
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('=======getting all products=======');
  Product.findAll({
    where: {
      user_id: req.session.user_id
    }
  })
    .then(dbProductData => {
      const products = dbProductData.map(product => product.get({ plain: true }));
      res.render('dashboard', { products, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// //make a new product
// router.get('/new', withAuth, (req, res)=>{
//   res.render('new-product', { loggedIn: req.session.loggedIn})
// });

// //edit a product
// router.get('/edit/:id', withAuth, (req, res) => {
//   Product.findByPk(req.params.id)
//     .then(dbProductData => {
//       if (dbProductData) {
//         const product = dbProductData.get({ plain: true });
        
//         //send data to template
//         res.render('edit-product', {
//           product,
//           loggedIn: req.session.loggedIn
//         });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

module.exports = router;