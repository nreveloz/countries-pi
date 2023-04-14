import React from "react";
import {Link} from "react-router-dom";

function Landing() {
    return (
        <div className="landing">
            <h1>Countries App</h1>
                <h2> Conoce el Mundo y Planifica tus Actividades Turísticas</h2>
                    <div>
                        A través de esta App podrás conocer generalidades de los países al rededor del mundo
                        y podrás planificar diferentes actividades turísticas que pretendas realizar en tus
                        futuros destinos.
                    </div>
            <br/>
            <br/>
            <br/>
                <h3>Henrry PI</h3>
            <br/>
            <br/>
            <div>
                <button>
                   <Link to={'/countries'}>Ingresar</Link>
                </button>
            </div>
        </div>
    )
};

export default Landing;
