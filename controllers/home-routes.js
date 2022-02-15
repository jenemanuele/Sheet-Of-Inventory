const router = require('express').Router();
const sequelize = require('../config/connection');
const {
    User,
    Category,
    Product
} = require('../models');

//gets all categories for homepage
router.get('/', (req, res) => {
    Category.findAll({
            attributes: [
                'id',
                'category_name'
            ],
            include: [{
                    model: Product,
                    attributes: ['id', 'product_name', 'Category_id', 'body_type', 'brand', 'cost'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbCategoryData => {
            const Category = dbCategoryData.map(Category => Category.get({
                plain: true
            }));

            res.render('homepage', {
                Category,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/Category/:id', (req, res) => {
    Category.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'category_name'
            ],
            include: [{
                    model: Product,
                    attributes: ['id', 'product_name', 'Category_id', 'body_type', 'brand', 'cost'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbCategoryData => {
            if (!dbCategoryData) {
                res.status(404).json({
                    message: 'No Category found with this id'
                });
                return;
            }

            const Category = dbCategoryData.get({
                plain: true
            });

            res.render('single-Category', {
                Category,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});


router.get('*', (req, res) => {
    res.status(404).send("Can't go there!");
    // res.redirect('/');
})


module.exports = router;