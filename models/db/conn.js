const pgp = require('pg-promise');
const config = {
  database: 'todos',
  host: 'localhost',
  port: '5432'
}
const conn = pgp(config)

module.exports = conn
