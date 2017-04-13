'use strict';
module.exports = {

    development: {
        client: 'pg',
        connection: 'postgresql://localhost/react-lightning'
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }

};
