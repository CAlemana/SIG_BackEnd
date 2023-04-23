const pool = require("../../database");
const queries = require('../queries/client_query');

const get = (req, res) => {
    pool.query(queries.get, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}


const add = (req, res) => {
    const { cedula, name, lastname, age, gender, height, weight, phone, start_date, end_date, imc } = req.body;
    pool.query(queries.checkIdExists, [cedula], (error, results) => {
        if (results.rows.length) {
            res.json("ya existe");
	    return;
        }
        pool.query(queries.add, [cedula, name, lastname, age, gender, height, weight, phone, start_date, end_date, imc], (error, results) => {
            if (error) throw error;
            res.status(201).json('creado exitosamente');
        });
    });
};



const getById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const remove = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if (notFound) {
            res.status(404).send("No existe en la base de datos");
            return;
        }
        pool.query(queries.remove, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Eliminado exitosamente");
        });
    });
};

const update = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, lastname, age, gender, height, weight, phone, start_date, end_date, imc } = req.body;

    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if (notFound) {
            res.status(404).send("No existe en la base de datos");
            return;
        }

        pool.query(queries.update, [name, lastname, age, gender, height, weight, phone, start_date, end_date, imc, id], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).send("Error al actualizar");
                return;
            }
            res.status(200).json({ message: "Actualizado exitosamente" });
        });
    });
};


module.exports = {
    get,
    getById,
    add,
    remove,
    update,
}