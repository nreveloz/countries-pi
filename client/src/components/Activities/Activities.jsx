import React, {useState} from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import style from "./ActivitiesForm.module.css";
import {useSelector} from "react-redux";


function Activities() {

    const countries = useSelector(state => state.countries)

    const [input, setInput] = useState({
        name: '',
        duration: '',
        difficulty: '',
        season: '',
        selectedCountries: [],
    })

    const [errors, setErrors] = useState({
        name: '',
        duration: '',
        difficulty: '',
        season: '',
        selectedCountries: [],
    })

    function onCountrySelect(event) {
        const countryId = event.target.value
        if (countryId && !input.selectedCountries.find(country => country.id === countryId)) {
            const country = countries.find(country => country.id === countryId)
            if (country) {
                setInput({
                    ...input,
                    selectedCountries: [...input.selectedCountries, country]
                })
            }
        }
    }

    function removeFromSelected(event) {
        event.preventDefault();
        const countryId = event.target.id
        setInput({
            ...input,
            selectedCountries: input.selectedCountries.filter(country => country.id !== countryId )
        })
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })

        // setErrors(validate({
        //     ...input,
        //     [event.target.name]: event.target.value
        // }))
    }

    const validate = (input) => {
        if (!input.name) {
            errors.name = 'Se requiere llenar un nombre'
        }
        ;
        if (input.name.length < 3) {
            errors.name = 'requiere mas de 3 carácteres'
        }
        if (!input.duration) {
            errors.duration = 'Se requiere asignar un tiempo'
        }
        ;
        if (!input.difficulty) {
            errors.difficulty = 'Se requiere seleccionar un campo'
        }
        ;
        if (!input.season) {
            errors.season = 'Se requiere seleccionar un campo'
        }
        ;
        // if(!input.country){ errors.country = 'Se requiere seleccionar un pais'};
        return errors;
    }


    const handleSubmit = (event) => {

        event.preventDefault();
        if(true){
            const apiActivity = {
                name: input.name,
                duration: input.duration,
                difficulty: input.difficulty,
                season: input.season,
                countryIds: input.selectedCountries.map(country => country.id)
            }
            console.log("api activity:", apiActivity);
            axios.post("http://localhost:3001/activities/create-activity", apiActivity)
                .then(res => alert("Actividad creada con éxito"))
                .catch(err => alert(err));
            setInput(
                {
                    name:'',
                    duration:'',
                    difficulty:'',
                    season:'',
                    selectedCountries:[],

                })
            // setErrors({
            //             name:'',
            //             duration:'',
            //             difficulty:'',
            //             season:'',
            //     selectedCountries:[],
            //
            //         })
        }
        else {
            alert("Debe llenar todos los campos")
        }
    };


    return (
        <div>
            <div>
                <Nav/>
            </div>
            <div className={style.container}>
                <form onSubmit={handleSubmit}>
                    <h2> - Nueva Actividad - </h2>
                    <br/>
                    <div className={style.formDiv}>

                        <label htmlFor="name" placeholder='Ingrese un nombre'> Nombre: </label>
                        <input type="text" name="name" value={input.name} onChange={handleChange}/>
                        {/*{*/}
                        {/*    errors.name && <p className={style.danger}>{errors.name}</p>*/}
                        {/*}*/}
                        <br/>
                        <br/>
                        <label htmlFor="duration" placeholder='Ingresa una duración'> Duración: </label>
                        <input type="time" step="60" id="hours" name="duration" value={input.duration} onChange={handleChange}/>
                        {/*{*/}
                        {/*    errors.duration && <p className={style.danger}>{errors.duration}</p>*/}
                        {/*}*/}

                        <br/>
                        <br/>
                        <label> Dificultad:</label>
                        <div>
                            <input type="radio" name="difficulty" value={1} onChange={handleChange}
                                   checked={input.difficulty === "1"}/>1
                            <input type="radio" name="difficulty" value={2} onChange={handleChange}
                                   checked={input.difficulty === "2"}/>2
                            <input type="radio" name="difficulty" value={3} onChange={handleChange}
                                   checked={input.difficulty === "3"}/>3
                            <input type="radio" name="difficulty" value={4} onChange={handleChange}
                                   checked={input.difficulty === "4"}/>4
                            <input type="radio" name="difficulty" value={5} onChange={handleChange}
                                   checked={input.difficulty === "5"}/>5
                            {/*{*/}
                            {/*    errors.difficulty && <p className={style.danger}>{errors.difficulty}</p>*/}
                            {/*}*/}
                        </div>

                        <br/>
                        <label>Temporada:</label>
                        <div>
                            <input type="checkbox" name="season" value="Primavera" onChange={handleChange}
                                   checked={input.season === "Primavera"}/> 🌷Primavera
                            <input type="checkbox" name="season" value="Verano" onChange={handleChange}
                                   checked={input.season === "Verano"}/> 🌴 Verano
                            <input type="checkbox" name="season" value="Otoño" onChange={handleChange}
                                   checked={input.season === "Otoño"}/> 🍂 Otoño
                            <input type="checkbox" name="season" value="Invierno" onChange={handleChange}
                                   checked={input.season === "Invierno"}/> ❄️ Invierno
                            {/*{*/}
                            {/*    errors.season && <p className={style.danger}>{errors.season}</p>*/}
                            {/*}*/}
                        </div>

                        <br/>
                        <label htmlFor="pais"> País:</label>
                        <div>
                            <div>
                                <input autoComplete="off" list="countries" onInput={onCountrySelect}/>
                                <datalist id="countries">
                                    {countries.map(country => {
                                        return (<option key={country.id}
                                                        value={country.id}>{country.name}</option>)
                                    })}
                                </datalist>
                                {input.selectedCountries.map((country =>
                                    <div key={country.id}>
                                        <label>{country.id} - {country.name}         </label>
                                        <img src={country.flag_image} width="30px" alt={country.name}/>
                                        <button id={country.id} onClick={removeFromSelected}>x</button>
                                    </div>))}
                            </div>
                        </div>
                        <br/>
                        <button type="submit">AGREGAR ACTIVIDAD</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Activities;