const get = "SELECT id, value, kind_value, date FROM revenue";
const getById = "SELECT id, value, kind_value, date FROM revenue WHERE id = $1";
const checkIdExists = "SELECT id, value, kind_value, date FROM revenue WHERE id = $1";
const add = "INSERT INTO revenue (value, kind_value, date) VALUES ($1, $2, $3)";
const remove = "DELETE FROM revenue WHERE id = $1";
const update = "UPDATE client SET value=$1, kind_value=$2, date=$3 WHERE id = $4";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}