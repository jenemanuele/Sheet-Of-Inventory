const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Category, Product } = require('../models');
const withAuth = require('../utils/auth');

// get all categories for /dashboard/
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======getting all products======');
  Product.findAll({
    where: {
      user_id: req.session.user_id
    }
  })
    .then(dbProductData => {
      const products = dbProductData.map(product => product.get());
      res.render('dashboard', { products, loggedIn: req.session.loggedIn});
      console.log("=====sent to dashboard.handlbars======")
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// make a new product
router.get('/add', withAuth, (req, res)=>{
  res.render('product', { loggedIn: req.session.loggedIn})
});
// view product


router.get('/view', withAuth, (req,res) =>{
 res.render('product', { loggedIn: req.session.loggedIn})
});

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