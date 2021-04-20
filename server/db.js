const { Pool } = require('pg')
require("dotenv").config();
let pool;
let config;

if (process.env.DATABASE_URL) { //it's set in Heroku
  const connectionString = process.env.DATABASE_URL
  config = {
    connectionString: connectionString,
    sslmode: require,
    ssl: {
      rejectUnauthorized: false
    }
  }
} else { //default local config
  config = {
    host: "localhost" ,
    user:process.env.db_user,
    database: "housing_application",
    password: process.env.db_password,
    port: process.env.db_port || 5432,
  };
}
pool = new Pool(config)  

exports.Connection = pool