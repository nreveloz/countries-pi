import React from "react";
import { Link } from "react-router-dom";


const Country = ({ flagimg, name, region, id, activities }) => {
    return (
        <div>
            <Link to={`/countries/${id}`}>
                <div>
                    <img src={flagimg} alt="no img"/>
                </div>
                <h2>{name}</h2>
                <h3>{region}</h3>
                <h3>{}</h3>
            </Link>
        </div>
    );
};

export default Country;
