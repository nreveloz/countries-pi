import React from "react";
import { Link } from "react-router-dom";
import style from "./Country.module.css";


const Country = ({ id, flag_image, name, continent, population }) => {
    return (
        <div className={style.countryContainer}>
            <Link to={`/countries/${id}`} style={{textDecoration: "none" , title:"link to detail"}}>
                <div>
                    <img src={ flag_image } alt={name} />
                </div>
                <h2> {name} </h2>
            </Link>
                <h3> Continente: {continent} </h3>
                <h3> Población: {population} </h3>
        </div>
    );
};

export default Country;
