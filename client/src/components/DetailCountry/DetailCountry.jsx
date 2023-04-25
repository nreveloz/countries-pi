import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom/cjs/react-router-dom";
import style from "./DetailCountry.module.css";
import Nav from "../Nav/Nav";

function DetailCountry() {

    const { id } = useParams();
    const [ country, setCountry ] = useState({});


    useEffect( () => {
            fetch(`http://localhost:3001/countries/${id}`)
                .then( (response) => response.json())
                .then( (country) => {
                    console.log("local server response on detail :", country)
                    if (country.name) {
                        setCountry(country);
                    } else {
                        window.alert("No hay países con ese ID");
                    }
                })

                .catch((err) => {
                    console.log(err);
                })
        }
            , [id]);


    return(
        <div>
            <Nav/>
            <h1>PAÍS</h1>
            { country.name ?
                <div>
                    <div className={style.detailCountryContainer}>
                        <div className={style.imageDiv}>
                            <img  alt={country.name} src={ country?.flag_image } /> {/**/}
                        </div>
                        <div className={style.infoContainer}>
                            <h1> {country.name} </h1>
                            <h3> ID: {id} </h3>
                            <h3> Continente: { country?.continent } </h3>
                            <h3> Población: { country?.population } </h3>
                            <h3> Capital: { country?.capital_city } </h3>
                            <h3> Sub-region: { country?.subregion } </h3>
                            <h3> Área: { country?.area }  </h3>
                        </div>
                        <div>
                            <div className={style.activityDiv} >
                                <h2>Actividades </h2>
                                { country.Activities.map(activity =>
                                    <div key = {activity.id} className={style.infoActivitiesDiv}>
                                        <ul>
                                            <h3> ⭑ {activity?.name} </h3>
                                            <h4> Dificultad : {activity?.difficulty} </h4>
                                            <h4> Duración : {activity?.duration} horas </h4>
                                            <h4> Temporada : {activity?.season} </h4>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            : null }
        </div>
    )
}

export default DetailCountry;