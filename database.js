const Pool = require("pg").Pool;

/*const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "test",
    password: "carlos9105",
    port: 5432,   */ 
});

const pool = new Pool({
    user: "carlosa",
    host: "dpg-cfdic39a6gdja6bq88mg-a.oregon-postgres.render.com",
    database: "sig_db_9d0w",
    password: "GJmFFbrKSqcRpOMGjFxQWphkwDgj2dWq",
    ssl: { "rejectUnauthorized": false },
    port: 5432  //puertobase de datos estanda de postgreSQL
}); 

module.exports = pool; 