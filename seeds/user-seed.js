const { User } = require('../models');

const userData = [{
        username: 'Gwenchicken',
        password: 'Gwen'

    },
    {
        username: 'JessicaChicken',
        password: 'Jessica'
    },
    {
        username: 'TomatoJelly',
        password: 'tomatojelly'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;