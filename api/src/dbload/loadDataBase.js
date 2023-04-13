const axios = require('axios');
const { Country } = require("../db");

// 1. Creamos una funcion (mapCountryFromApi) para mapear cada pais de la lista del API externa.
// 2. Mapeamos la lista total con un map para extraer cada campo requerido.
// 3. insertamos los datos mapeados en la base de datos.

const loadDataFromApi = () => {
    axios.get('https://restcountries.com/v3.1/all')
        .then(response => {
            const mappedResult = response.data.map(mapCountryFromApi)
            Country.bulkCreate(mappedResult)
                .then(() => console.log("Database successfully loaded"))
                .catch((err) => console.log("Error loading countries into database : ", err.message))
        })
};


function mapCountryFromApi(country) {

    return {
        id : country.cca3,
        name : country.name.common,
        flag_image: country.flags.png,
        continent: country.region,
        capital_city: country.capital ? country.capital[0] : "No definida",
        subregion: country.subregion,
        area: country.area,
        population: country.population
    }
};

module.exports = loadDataFromApi; //--> la llevamos a index.js para cargar la BD al inicializar la API.