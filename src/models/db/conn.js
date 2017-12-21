const pgp = require('pg-promise')();
const config = {
  host: 'localhost',
  port: 5432,
  database: 'debraycarpenter'
}
// const connectionString = `postgres://localhost:5432/todo`
const conn = pgp(config)

module.exports = conn
