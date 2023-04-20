import React from "react";
import {Link} from "react-router-dom";
import style from "./Landing.module.css";

function Landing() {
    return (
        <div className={style.landing} >
            <div className={style.landingDiv}>
            <h1 >Countries App</h1>
                <h2> Conoce el Mundo y Planifica tus Actividades Turísticas</h2>
                    <div>
                        A través de esta App podrás conocer generalidades de los países alrededor del mundo
                        y podrás planificar actividades que puedas o pretendas realizar en ellos.
                    </div>
            <br/>
            <br/>
            <br/>
                <h3>Henrry PI</h3>
            <div>
                <button>
                   <Link to={'/countries'}>Ingresar</Link>
                </button>
            </div>
            </div>
        </div>
    )
};

export default Landing;
