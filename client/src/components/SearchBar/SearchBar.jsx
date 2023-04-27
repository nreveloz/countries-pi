import React from "react";
import { useState } from "react";
import style from "./SearchBar.module.css";
import {useDispatch} from "react-redux";
import {getCountries, getCountriesBySearch} from "../../redux/actions";
import {useHistory} from "react-router-dom"



function SearchBar() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [ input, setInput] = useState("");

    const handleOnChange = (event) => {  // -> setea el string
        setInput(event.target.value);
        event.preventDefault(); //-> evita refrescar la barra
    }

    const handleSubmit = () => {
        dispatch(getCountriesBySearch(input))
            .then(() => history.push("/countries", {doNotRefresh : true}));
    };

    const handleClearFilters = () => {
        dispatch(getCountries()).then((r) => console.log(r))
    };

    // function handleSubmit(){
    //     const filtered = countries.filter( country => country.name.includes(input));
    //     setFilteredCountry(filtered)
    // }

    // let results = [];
    // if (!input){
    //     results = countries
    // }
    // else {
    //     countries.filter((country) => country.name.includes(input))
    // }

    //
    // const handleSubmit = () => {
    //     console.log("input :", input)
    //    axios.get(`http://localhost:3001/countries/?name=${input}`)
    //     .then(response => {
    //         console.log("countries : ", response.data)
    //     })
    // }


    return (
        <div>
            <input type='search' placeholder='Buscar país' className={style.inputSearchBar}
                   value={input} onChange={handleOnChange}/>
            <button type='submit' className={style.buttonSearchBar} onClick={handleSubmit}>
                    Buscar
            </button>
            <button type='submit' className={style.buttonSearchBar} onClick={handleClearFilters}>
                Limpiar Búsqueda
            </button>
        </div>
    );

};

export default SearchBar;
