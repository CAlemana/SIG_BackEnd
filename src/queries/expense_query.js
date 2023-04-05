const get = "SELECT id, value, kind_value, date FROM expense";
const getById = "SELECT id, value, kind_value, date FROM expense WHERE id = $1";
const checkIdExists = "SELECT id, value, kind_value, date FROM expense WHERE id = $1";
const add = "INSERT INTO expense (value, kind_value, date) VALUES ($1, $2, $3)";
const remove = "DELETE FROM expense WHERE id = $1";
const update = "UPDATE expense SET value=$1, kind_value=$2, date=$3 WHERE id = $4";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}