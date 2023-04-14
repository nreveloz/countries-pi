const { Router } = require('express');
const createActivity = require("../controllers/createActivity");
const {Country, Activity} = require("../db");
const getAllActivities = require('../controllers/getAllActivities');


const activityRouter = Router();
// POST | /activities
// Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
//     Toda la información debe ser recibida por body.
//     Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).

activityRouter.post("/create-activity", async ( req, res ) => {
    try {
        const {name, difficulty, duration, season, countryIds} = req.body;
        const newActivity = await createActivity(name, difficulty, duration, season);
        await newActivity.addCountries(countryIds);
        const newActivityWithCountry = await Activity.findOne({

            where: {
                id: newActivity.id
            },

            include: Country
        });

        res.status(200).json(newActivityWithCountry);
    }

    catch (error) {
        res.status(400).json( { err: error.message });
    }
});



// 📍 GET | /activities
// Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.
activityRouter.get("/", async ( req, res ) => {
    try {
        const activities = await getAllActivities();
        res.status(200).json(activities);
    }
    catch (error) {
        res.status(400).json( { err: error.message });
    }
});


module.exports = activityRouter;