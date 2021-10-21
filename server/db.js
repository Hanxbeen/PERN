const Pool = require("pg").Pool;

const pool = new Pool({
  user: "hb",
  host: "localhost",
  database: "perntodo",
  password: "1111",
  port: 5433,
});

module.exports = pool;
