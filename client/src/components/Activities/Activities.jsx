import React, {useState} from "react";
import Nav from "../Nav/Nav";
import style from "./ActivitiesForm.module.css";
import {useDispatch, useSelector} from "react-redux";
import {createActivity, getAllActivities, getCountries} from "../../redux/actions";


function Activities() {

    const dispatch = useDispatch();

    const countries = useSelector(state => state.allCountries)

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
        const countryId = event.target.value   //--> se compara si el id selecionado ya existe en selected Countries
        if (countryId && !input.selectedCountries.find(country => country.id === countryId)) { //si existe no se agrega
            const country = countries.find(country => country.id === countryId) //--> encontramos pais por id
            if (country) {
                setInput({
                    ...input,
                    selectedCountries: [...input.selectedCountries, country]
                }) //---> lo seteamos al selected countries
                event.target.value = null
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
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })

        setErrors(validate({
            ...input,
            [event.target.name]: event.target.value
        }))
    }

    const validate = (input) => {
        let errors ={};
        if ( input.name.length < 3) { errors.name = 'Requiere nombre con mas de 3 carácteres'};
        if (!input.duration) { errors.duration = 'Requiere asignar un tiempo'};
        if (!input.difficulty) { errors.difficulty = 'Requiere seleccionar un campo'};
        if (!input.season) { errors.season = 'Requiere seleccionar un campo'};
        return errors;
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if(!Object.values(errors).length && input.selectedCountries.length > 0){
            const apiActivity = {
                name: input.name,
                duration: input.duration,
                difficulty: input.difficulty,
                season: input.season,
                countryIds: input.selectedCountries.map(country => country.id)
            }

            dispatch(createActivity(apiActivity))
                .then(() => alert("Actividad creada con éxito"))
                .then(() => getCountries())
            setInput({
                name:'',
                duration:'',
                difficulty:'',
                season:'',
                selectedCountries:[],
            })
            setErrors({
                name:'',
                duration:'',
                difficulty:'',
                season:'',
            })
        }
        else {
            alert("Debe agregar todos los campos")
        }
    };

    return (
        <div>
            <div>
                <Nav/>
            </div>
            <div className={style.container}>
                <form onSubmit={handleSubmit}>
                    <h2>  Nueva Actividad  </h2>
                    <br/>
                    <div className={style.formDiv}>

                        <label htmlFor="name" placeholder='Ingrese un nombre'> Nombre: </label>
                        <input type="text" name="name" value={input.name} onChange={handleChange}
                               className={ errors.name && 'warning'}/>
                        {
                            errors.name && <p className={style.danger}>{errors.name}</p>
                        }
                        <br/>
                        <br/>
                        <label htmlFor="duration" placeholder='Ingresa una duración'> Duración: </label>
                        <input type="time" step="60" id="hours" name="duration" value={input.duration} onChange={handleChange}
                               className={ errors.duration && 'warning'}/>
                        {
                            errors.duration && <p className={style.danger}>{errors.duration}</p>
                        }

                        <br/>
                        <br/>
                        <label> Dificultad:</label>
                        <div className={ errors.difficulty && 'warning'}>
                            <input type="radio" name="difficulty" value={1} onChange={handleChange}
                                   checked={input.difficulty === "1"}/>1
                            <label>  </label>
                            <input type="radio" name="difficulty" value={2} onChange={handleChange}
                                   checked={input.difficulty === "2"}/>2
                            <label> </label>
                            <input type="radio" name="difficulty" value={3} onChange={handleChange}
                                   checked={input.difficulty === "3"}/>3
                            <label>  </label>
                            <input type="radio" name="difficulty" value={4} onChange={handleChange}
                                   checked={input.difficulty === "4"}/>4
                            <label>  </label>
                            <input type="radio" name="difficulty" value={5} onChange={handleChange}
                                   checked={input.difficulty === "5"}/>5
                            {
                                errors.difficulty && <p className={style.danger}>{errors.difficulty}</p>
                            }
                        </div>

                        <br/>
                        <label >Temporada:</label>
                        <div className={ errors.season && 'warning'}>
                            <input type="checkbox" className={style.checkboxSeason} name="season" value="Primavera" onChange={handleChange}
                                   checked={input.season === "Primavera"}/> 🌷Primavera
                            <label> -- </label>
                            <input type="checkbox" name="season" value="Verano" onChange={handleChange}
                                   checked={input.season === "Verano"}/> 🌴 Verano
                            <label> -- </label>
                            <input type="checkbox" name="season" value="Otoño" onChange={handleChange}
                                   checked={input.season === "Otoño"}/> 🍂 Otoño
                            <label> -- </label>
                            <input type="checkbox" name="season" value="Invierno" onChange={handleChange}
                                   checked={input.season === "Invierno"}/> ❄️ Invierno
                            {
                                errors.season && <p className={style.danger}>{errors.season}</p>
                            }
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
                                    <div key={country.id}   className={style.renderCountry}>
                                        <img src={country.flag_image} width="30px" alt={country.name}/>
                                        <label> {country.id} - {country.name}</label>
                                        <button id={country.id} onClick={removeFromSelected}>x</button>
                                    </div>))}
                            </div>
                        </div>
                        <br/>
                        <button type="submit" className={style.submitButton}>AGREGAR ACTIVIDAD</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Activities;