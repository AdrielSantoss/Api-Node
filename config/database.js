const config = require('./knexfile'),
      knex = require('knex')(config);

module.exports = knex;
     