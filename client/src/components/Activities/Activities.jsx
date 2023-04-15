import React from "react";
import Nav from "../Nav/Nav";


function Activities() {

    // Activitiesconst [ userData, setUserData ] = useState({
    //     name:'',
    //     duration:'',
    //     dificulty:'',
    //     season:'',
    //     country:[],
    // })

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    // }

    return(

        <div>
            <div>
               <Nav/>
            </div>
            <div>
                <form onSubmit={ handleSubmit }> {/*onSubmit={ handleSubmit }*/}

                    <h2> Crea Nueva Actividad: </h2>
                    <br/>

                    <label htmlFor="name"  placeholder='Ingresa un nombre'>Nombre:</label>
                    <input type="text" name="name"  />  {/*value={userData.name*/}

                    <br/>
                    <label htmlFor="duration" placeholder='Ingresa una duración'>Duración:</label>
                    <input type="time" id="hours" name="duration"  />  {/*value={userData.name*/}

                    {/*value={userData.duration}*/}

                    <br/>
                    <label htmlFor="dificulty" placeholder='Seleccione una dificultad:'>Dificultad:</label>*
                    <input type="radio" name="1"  >1 </input>
                    <input type="radio" name="2"  >2 </input>
                    <input type="radio" name="3"  >3 </input>
                    <input type="radio" name="4"  >4 </input>
                    <input type="radio" name="5"  >5 </input>


                    <br/>
                    <label htmlFor="season" placeholder='Seleccione la temporada'>Temporada:</label>
                    <input type="checkbox" name="season" value="Primavera"> 🌷Primavera </input>
                    <input type="checkbox" name="season" value="Verano"> 🌴 Verano </input>
                    <input type="checkbox" name="season" value="Otoño"> 🍂 Otoño </input>
                    <input type="checkbox" name="season" value="Invierno"> ❄️ Invierno </input>

                    {/*<br/>*/}
                    {/*<label htmlFor="season" placeholder='Seleccione la temporada'>Temporada:</label>*/}
                    {/*<select name="temporada" id="temporada" value={userData.season}>*/}
                    {/*    <option value="seleccionar">Seleccionar...</option>*/}
                    {/*    <option value="invierno">Invierno</option>*/}
                    {/*    <option value="otonio">Otoño</option>*/}
                    {/*    <option value="primavera">Primavera</option>*/}
                    {/*    <option value="verano">Verano</option>*/}
                    {/*</select>*/}


                    <br/>
                    <label htmlFor="pais" placeholder='Seleccione el paÍs'> País:</label>


                    <br/>
                    <button type="submit">AGREGAR ACTIVIDAD</button>
                </form>
            </div>
        </div>
    )
}

export default Activities;