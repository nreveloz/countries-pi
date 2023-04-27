const { Country, Activity} = require('../db');

const getCountyDetailById = async ( id ) => {
    const countryDetail = await Country.findOne({  //--> encuentra 1 pais por id en DB y lo devuelve con sus activities

        where: {
            id : id
        },

        include: Activity
    });

    return countryDetail;
}

module.exports = getCountyDetailById;