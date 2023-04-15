import React from "react";


function DetailCountry() {

    return(
        <div>
            <div>
                <img  alt="name" /> {/*src={ flag_image } alt={name}*/}
            </div>
            <div>
                <h2> NOMBRE </h2>  {/*{name}*/}
                <h3> Continente: </h3> {/*{ country.continent } */}
                <h3> Población:  </h3> {/*{ country.population }*/}
                <h3> Capital:  </h3> {/*{ country.capital_city }*/}
                <h3> Region: </h3> {/* country.region } */}
                <h3> subregion:  </h3> {/*{ country.subregion }*/}
                <h3> area:  </h3> {/*{ country.area }*/}
                <h4> Activities </h4> {/**/}
            </div>
        </div>
    )
}

export default DetailCountry;