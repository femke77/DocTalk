const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await User.create(userSeeds);

    console.log('User collection seeded successfully!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  process.exit(0);
});