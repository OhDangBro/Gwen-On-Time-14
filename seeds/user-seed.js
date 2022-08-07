const { Users } = require('../models');

const userData = [{
        user_name: 'Gwenchicken',
        password: 'Gwen'

    },
    {
        user_name: 'JessicaChicken',
        password: 'Jessica'
    },
    {
        user_name: 'TomatoJelly',
        password: 'tomatojelly'
    }
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;