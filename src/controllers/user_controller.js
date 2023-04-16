const pool = require("../../database");
const queries = require('../queries/user_query');

const get = (req, res) => {
    pool.query(queries.get, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}




module.exports = {
    get
}