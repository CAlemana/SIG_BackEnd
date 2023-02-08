const get = "SELECT cedula, name, lastname, age, gender, phone, start_date, end_date FROM client";
const getById = "SELECT cedula, name, lastname, age, gender, phone, start_date, end_date FROM client WHERE cedula = $1";
const checkIdExists = "SELECT cedula, name, lastname, age, gender, phone, start_date, end_date FROM client WHERE cedula = $1";
const add = "INSERT INTO client (cedula, name, lastname, age, gender, phone, start_date, end_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
const remove = "DELETE FROM client WHERE cedula = $1";
const update = "UPDATE client SET cedula=$1, name=$2, lastname=$3, age=$4, gender=$5, phone=$6, start_date=$7, end_date=$8 WHERE cedula = $12";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}