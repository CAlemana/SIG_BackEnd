const get = "SELECT cedula, name, height, weight, imc FROM IMC";
const getById = "SELECT cedula, name, height, weight, imc FROM IMC WHERE cedula = $1";
const checkIdExists = "SELECT cedula, name, height, weight, imc FROM IMC WHERE cedula = $1";
const add = "INSERT INTO IMC (cedula, name, height, weight, imc) VALUES ($1, $2, $3, $4, $5)";
const remove = "DELETE FROM IMC WHERE cedula = $1";
const update = "UPDATE IMC SET cedula=$1, name=$2, height=$3, weight=$4, imc=$5 WHERE cedula = $6";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}
