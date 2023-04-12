x|const get = "SELECT cedula, name, lastname, age, gender, height, weight, phone, start_date, end_date, imc FROM client";
const getById = "SELECT cedula, name, lastname, age, gender, height, weight, phone, start_date, end_date, imc FROM client WHERE cedula = $1";
const checkIdExists = "SELECT cedula, name, lastname, age, gender, height, weight, phone, start_date, end_date, imc FROM client WHERE cedula = $1";
const add = "INSERT INTO client (cedula, name, lastname, age, gender, height, weight, phone, start_date, end_date, imc) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
const remove = "DELETE FROM client WHERE cedula = $1";
const update = "UPDATE client SET  name=$1, lastname=$2, age=$3, gender=$4, height=$5, weight=$6, phone=$7, start_date=$8, end_date=$9, imc=$10 WHERE cedula = $11";


module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}