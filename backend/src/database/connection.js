const knex = require('knex');
const configuration = require('../../knexfile')
//criar a conexão com bd
const connection = knex(configuration.development);

module.exports = connection;