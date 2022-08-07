const { Users } = require('../models');

const userData = [{
        user_name: 'Gwen',
        password: 'Gwen2'

    },
    {
        user_name: 'Jessica',
        password: 'Gwen3'
    },
    {
        user_name: 'TomatoJelly',
        password: 'Gwen4'
    }
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;