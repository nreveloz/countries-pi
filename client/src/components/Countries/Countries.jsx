import React from "react";
import Country from "./Country";
import style from "./Countries.module.css";


function Countries({countries}) {

    return(
        <div>
            <h2 className={style.countriesH2}>PAÍSES</h2>
            <br/>
            <div className={style.countriesDiv}>
                {
                    countries?.map(({ id, flag_image, name, continent, population, capital_city, region, subregion, area }) => {
                        return <Country
                            key={id}
                            id={id}
                            name={name}
                            flag_image={flag_image}
                            continent={continent}
                            population={population}
                            capital_city={capital_city}
                            region={region}
                            subregion={subregion}
                            area={area}
                        />
                    })
                }
            </div>
        </div>
    )
};

export default Countries;
