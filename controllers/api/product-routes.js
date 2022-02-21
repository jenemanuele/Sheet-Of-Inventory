// Dependencies
// Express.js connection
const router = require('express').Router();
const { dbProductData } = require('express');
// Product model
const { Product, Category, User } = require('../../models');
// the authorization middleware to redirect unauthenticated users to the login page
const withAuth = require('../../utils/auth');
// Routes

// Get all products
// api/products
// get all products
router.get('/', withAuth, (req, res) => {
  Product.findAll({
    where: {
      id: req.params.id
    },
  })
  .then(dbProductData => res.json(dbProductData))  
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// get singular product
// api//products/id
router.get('/:id', (req, res) => {
  Product.findAll({
    where: {
      category_id: req.params.category_id,
      product_name:req.body.product_name
    },
    include: [
      {
        model: Product,
        attributes: [ "product_name", "category_id", "cost", "brand", "body_type"],
      }
    ],
  })
    .then((dbProductData) => {
      if (!dbProductData) {
        res.status(404).json({ message: "Product with this id not found" });
        return;
      }
      res.json(dbProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Post a new Product
router.post('/', withAuth, (req, res) => {
  // check the session, and if it exists, create a Product

    Product.create({
      // ...req.body,
      product_name: req.body.product_name,
      category_id: parseInt(req.body.category_id),
      cost: parseInt(req.body.cost),
      body_type: req.body.body_type,
      brand: req.body.brand

      // use the user id from the session
      // user_id: req.session.user_id
    })
      .then(dbProductData => res.json(dbProductData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  
});

// Delete a Product
router.delete('/:id', withAuth, (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No Product found with this id' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/view', withAuth, (req,res) =>{
  res.render('product/view', { loggedIn: req.session.loggedIn})
 });
 
module.exports = router;