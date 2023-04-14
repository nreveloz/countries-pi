const { Router } = require('express');
const getAllCountries = require('../controllers/getAllCountries');
const getCountyDetailById = require('../controllers/getCountyDetailById');
const getCountriesByNameLike = require('../controllers/getCountriesByNameLike');
const { Activity, Country } = require("../db");

const countryRouter = Router();

// GET | /countries
// Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.
/*
countryRouter.get("/", async (req, res) => {
    try {
        const countries = await getAllCountries();
        res.status(200).json(countries);
    }
    catch (error) {
        res.status(500).json({ err : error.message });
    }
});*/


// 📍 GET | /countries/:idPais
// Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
//     El país es recibido por parámetro (ID de tres letras del país).
// Tiene que incluir los datos de las actividades turísticas asociadas a este país.


countryRouter.get("/:countryId", async (req, res) =>{
    try {
        const { countryId } = req.params;
        const countryDetailById = await getCountyDetailById(countryId);

        res.status(200).json(countryDetailById);
    }

    catch (error) {
        res.status(400).json({ err : error.message });
    }
});


// 📍 GET | /countries/name?="..."
//     Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
//     Si no existe el país, debe mostrar un mensaje adecuado.

countryRouter.get("/", async (req, res) => {
    const { name } = req.query;
    try {
        const countries = name ? await getCountriesByNameLike(name) : await getAllCountries();
        res.status(200).json(countries);
    }

    catch (error) {
        res.status(400).json({ err : error.message });
    }
});


module.exports = countryRouter;