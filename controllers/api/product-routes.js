// Dependencies
// Express.js connection
const router = require('express').Router();
// Product model
const { Product, Category } = require('../../models');
// the authorization middleware to redirect unauthenticated users to the login page
const withAuth = require('../../utils/auth');

// Routes

// Get all products
// api/products/
router.get('/', (req, res) => {
  // Access the Product model and run .findAll() method to get all Products
  Product.findAll()
    // return the data as JSON formatted
    .then(dbProductData => res.json(dbProductData))
    console.log("===got all products====")
    // if there is a server error, return that error
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get singular product
// api//products/id
router.get('/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ["id", "category_id", "product_name", "brand", "body_type"],
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
      ...req.body,

      // use the user id from the session
      user_id: req.session.user_id
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

module.exports = router;