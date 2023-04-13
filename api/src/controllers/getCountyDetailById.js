const { Country, Activity} = require('../db');

const getCountyDetailById = async ( id ) => {
    const countryDetail = await Country.findOne({

        where: {
            id : id
        },

        include: Activity
    });

    return countryDetail;
}

module.exports = getCountyDetailById;