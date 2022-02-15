const seedAcoustic = require('./acoustic-seeds');
const seedBass = require('./bass-seeds');
const seedElectric = require('./electric-seeds');
// const seedGuitars = require('./guitar-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedAcoustic();
  console.log('--------------');

  await seedBass();
  console.log('--------------');

  await seedElectric();
  console.log('--------------');

  // await seedGuitars();
  // console.log('--------------');

  process.exit(0);
};

seedAll();
