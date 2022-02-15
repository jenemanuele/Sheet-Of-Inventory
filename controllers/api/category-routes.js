const router = require('express').Router();
const { Category, Product } = require('../../models');
const withAuth = require('../../utils/auth');

//get all categories
// api/category
router.get('/', withAuth, (req, res) => {
  Category.findAll({
    where: {
      id: req.params.id
    },
  })
  .then(dbCategoryData => res.json(dbCategoryData))  //when client makes a GET request to /api/users, we'll select all users from user table in the db & send it back as JSON.
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//get one category
// api/category/id
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      }
    ],
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "Product with this id not found" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a new category
router.post('/', withAuth, (req, res) => {
  // check the session, and if it exists, create a Product
  if (req.session) {
    Category.create({
      category_name: req.body.category_name,
      category_id: req.body.category_id,
      cost: req.body.cost,
      body_type: req.body.body_type,
      brand: req.body.brand,

      // use the user id from the session
      // user_id: req.session.user_id
    })
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

module.exports = router;