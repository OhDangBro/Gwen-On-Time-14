///// DO NOT TOUCH ////
const { Users } = require('../models');

const userData = [{
        user_name: 'Gwen',
        password: 'Gwen2',
        email: 'gwen@aol.com'
        

    },
    {
        user_name: 'Jessica',
        password: 'Gwen3',
        email: 'Jessica@aol.com'
    },
    {
        user_name: 'TomatoJelly',
        password: 'Gwen4',
        email: 'Tomato@aol.com'
    }
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;