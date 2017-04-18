'use strict';
module.exports = {

    development: {
        client: 'pg',
        connection: 'postgresql://localhost/DATABASE_NAME'
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }

};
