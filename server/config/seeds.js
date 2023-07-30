const db = require('./connection');
const User = require('../models/User');

db.once('open', async () => {
  try {
    if (!User || typeof User.create !== 'function') {
      throw new Error('User model or create method is not available.');
    }

    // Create new users
    await User.create({
      firstName: 'Jane',
      lastName: 'Washington',
      email: 'jane123@testmail.com',
      password: 'password12345',
    });

    await User.create({
      firstName: 'John',
      lastName: 'Holt',
      email: 'john321@testmail.com',
      password: 'password12345'
    });

    console.log('Users seeded successfully');

    process.exit();
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
});
