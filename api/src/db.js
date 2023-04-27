require('dotenv').config();


const { Sequelize } = require('sequelize'); //--> importo libreria

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env; //--> credenciales conexion a DB
const CountryModel = require('./models/Country'); // ---> importo models
const ActivityModel = require('./models/Activity');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, { //--> conexion sequelize con DB
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});


CountryModel(sequelize);
ActivityModel(sequelize);

const { Country, Activity } = sequelize.models;

Country.belongsToMany( Activity, { through: 'country_activity'}); //--> creo relacion n-n
Activity.belongsToMany( Country, { through: 'country_activity'});


module.exports = {
  //...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  Country,
  Activity,
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
