const { Pool } = require('pg')

const dbPool = new Pool({
    user: 'postgres',
    database: 'personalweb',
    password: 'root',
    port: 5432
})

module.exports = dbPool;