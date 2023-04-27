const { Activity } = require('../db');

//--> trae todas las act de la BD

const getAllActivities = async () => {
    const activities = await Activity.findAll();
    return activities;
}

module.exports = getAllActivities;