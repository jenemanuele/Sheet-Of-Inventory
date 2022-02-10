const router = require('express').Router();
const { Instrument, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Instrument.findAll({
        // Query configuration
        attributes: ['id', 'type', 'name', 'count'],
        order: [['created_at', 'DESC']], 
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    // create a Promise that captures the response from the database call
        .then(dbInstrumentData => res.json(dbInstrumentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// find singluar Instrument
router.get('/:id', (req, res) => {
    Instrument.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'type', 'name', 'count'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbInstrumentData => {
        if (!dbInstrumentData) {
          res.status(404).json({ message: 'No Instrument found with this id' });
          return;
        }
        res.json(dbInstrumentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
//   create Instrument
router.Instrument('/', (req, res) => {
    Instrument.create({
      type: req.body.type,
      name: req.body.name,
      user_id: req.body.user_id
    })
      .then(dbInstrumentData => res.json(dbInstrumentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
//   update Instrument
router.put('/:id', (req, res) => {
    Instrument.update(
      {
        type: req.body.type
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbInstrumentData => {
        if (!dbInstrumentData) {
          res.status(404).json({ message: 'No Instrument found with this id' });
          return;
        }
        res.json(dbInstrumentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
//   delete a Instrument
router.delete('/:id', (req, res) => {
    Instrument.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbInstrumentData => {
        if (!dbInstrumentData) {
          res.status(404).json({ message: 'No Instrument found with this id' });
          return;
        }
        res.json(dbInstrumentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
module.exports = router;