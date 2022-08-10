///// DO NOT TOUCH ////
const { Users } = require('../models');

const userData = [{
        username: 'Gwen',
        password: 'Gwen2',
        email: 'gwen@aol.com'
        

    },
    {
        username: 'Jessica',
        password: 'Gwen3',
        email: 'Jessica@aol.com'
    },
    {
        username: 'TomatoJelly',
        password: 'Gwen4',
        email: 'Tomato@aol.com'
    }
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;