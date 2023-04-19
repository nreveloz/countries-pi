import React, {useState} from "react";
import Nav from "../Nav/Nav";


function Activities() {

    const [ input, setInput ] = useState({
        name:'',
        duration:'',
        difficulty:'',
        season:'',
        country:[],
    })

    const handleChange = (event) => {
        console.log(event.target.value)
        setInput({
            ...input,
            [event.target.name]: event.target.value

        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Actividad creada con éxito")
        setInput(
            {
                name:'',
                duration:'',
                difficulty:'',
                season:'',
                country:[],
            }
        )
    }

    return (
        <div>
            <div>
               <Nav/>
            </div>
            <div>
                <form onSubmit={handleSubmit}>

                    <h2> Crea Nueva Actividad: </h2>
                    <br/>

                    <label htmlFor="name"  placeholder='Ingrese un nombre'> Nombre:</label>
                    <input type="text" name="name" value={input.name} onChange={handleChange}/>

                    <br/>
                    <label htmlFor="duration" placeholder='Ingresa una duración'>Duración:</label>
                    <input type="time" id="hours" name="duration" value={input.duration} onChange={handleChange} />

                    {/*value={userData.duration}*/}

                    <br/>
                    <label> Dificultad:</label>
                    <div>
                        <input type="radio" name="difficulty"  value={1} onChange={handleChange} checked={ input.difficulty === "1"}/>1
                        <input type="radio" name="difficulty"  value={2} onChange={handleChange} checked={ input.difficulty === "2"}/>2
                        <input type="radio" name="difficulty"  value={3} onChange={handleChange} checked={ input.difficulty === "3"}/>3
                        <input type="radio" name="difficulty"  value={4} onChange={handleChange} checked={ input.difficulty === "4"}/>4
                        <input type="radio" name="difficulty"  value={5} onChange={handleChange} checked={ input.difficulty === "5"}/>5
                    </div>

                    <br/>
                    <label>Temporada:</label>
                    <div >
                        <input type="checkbox" name="season" value="Primavera" onChange={handleChange} checked={ input.season === "Primavera"}/> 🌷Primavera
                        <input type="checkbox" name="season" value="Verano" onChange={handleChange} checked={ input.season === "Verano"}/> 🌴 Verano
                        <input type="checkbox" name="season" value="Otoño" onChange={handleChange} checked={ input.season === "Otoño"}/> 🍂 Otoño
                        <input type="checkbox" name="season" value="Invierno" onChange={handleChange} checked={ input.season === "Invierno"}/> ❄️ Invierno
                    </div>

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