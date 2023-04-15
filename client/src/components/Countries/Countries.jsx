import React from "react";
import Country from "./Country";


function Countries(props) {

    return(
        <div>
            <h2>~PAISES~</h2>
            {
                countries.map(({ id, flag_image, name, continent, population, capital_city, region, subregion, area }) => {
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
    )
};

export default Countries;
