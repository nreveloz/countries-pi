const { Country, Activity} = require('../db');

const getAllCountries = async () => {
    const countries = await Country.findAll({
        include: Activity
    });
    return countries;
}

module.exports = getAllCountries;
