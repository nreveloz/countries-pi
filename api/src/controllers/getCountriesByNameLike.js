const { QueryTypes } = require('sequelize');  /// uso RAW QUERIES - replacement from sequelize
const { conn } = require('../db.js')


const getCountriesByNameLike =  async ( name ) => {
        const countriesByNameLike = await conn.query(
            'SELECT * FROM "Countries" WHERE name ILIKE :country_name',
            {
                 replacements: { country_name: `%${name}%` },
                type: QueryTypes.SELECT
            }
        );

   if(countriesByNameLike.length > 0) {
        return countriesByNameLike;
    }
    else {
        throw new Error("No se encontraron countries con ese nombre")
    }
}

module.exports = getCountriesByNameLike;