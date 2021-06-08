const { Pool } = require('pg')

const user = 'postgres'
const host = 'localhost'
const database = 'test'
const password = 'H#DuhbW2c8nU'
const port = '5432'

const pool = new Pool({
  user,
  host,
  database,
  password,
  port
})

const name = 'Mike'

;(async () => {
try {
  await pool.query('INSERT INTO dogs VALUES $1', [name])
  } catch(err) {
    console.error(err)
  }
})()

pool.end()