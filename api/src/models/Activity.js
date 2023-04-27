const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
// defino el modelo: --> estructura de la tabla en DB
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        difficulty: {
            type: DataTypes.ENUM("1", "2" , "3" , "4" , "5"),
            allowNull: false
        },

        duration: {
            type: DataTypes.TIME,
            allowNull: false
        },

        season: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false
        },
    },
        { timestamps: false });
};
