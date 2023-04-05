const pool = require("../../database");
const queries = require('../queries/expense_query');

const get = (req, res) => {
    pool.query(queries.get, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}


const add = (req, res) => {
    const { value, kind_value, date } = req.body;
/*
    pool.query(queries.checkIdExists, [id], (error, results) => {
        if (results.rows.length) {
            res.json("ya existe");
	    return;
        }
        pool.query(queries.add, [value, kind_value, date], (error, results) => {
            if (error) throw error;
            res.status(201).json('creado exitosamente');
        });
    });
*/
    pool.query(queries.add, [value, kind_value, date], (error, results) => {
        if (error) throw error;
        res.status(201).json('creado exitosamente');
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
    const { value, kind_value, date } = req.body;
    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if (notFound) {
            res.status(404).send("No existe en la base de datos");
            return;
        }
        pool.query(queries.update, [value, kind_value, date, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Actualizado exitosamente");
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