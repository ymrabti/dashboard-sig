const pg = require("pg");
const Pool = require('pg').Pool
const config_pg = {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Z@Postgresql52Postgis",
    database: "SDMB",
};

const pool = new Pool(config_pg);

const conpg = new pg.Connection(config_pg);

const client = new pg.Client(config_pg);

module.exports={
    client,conpg,pool
}