const { Activity, Country} = require('../db');


// --> crea nueva actividad, le adiciona los paises y busca 1 act por id y la trae con los paises apendeados.

const createActivity = async ( name, difficulty, duration, season, countryIds ) => {
    const newActivity = await Activity.create( { name, difficulty, duration, season });
    await newActivity.addCountries(countryIds);
    const newActivityWithCountry = await Activity.findOne({
        where: {
            id: newActivity.id
        },
        include: Country
    });
    return newActivityWithCountry;
};

module.exports = createActivity;