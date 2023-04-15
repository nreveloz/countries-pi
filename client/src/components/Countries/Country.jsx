import React from "react";
import { Link } from "react-router-dom";
import style from "./Country.module.css";


const Country = ({ id, flag_image, name, continent, population }) => {
    return (
        <div className={style.contenedor}>
            <Link to={`/countries/${id}`}>
                <div>
                    <img src={ flag_image } alt={name} />
                </div>
                <h2> {name} </h2>
                <h3> Continente: {continent} </h3>
                <h3> Población: {population} </h3>

            </Link>
        </div>
    );
};

export default Country;
