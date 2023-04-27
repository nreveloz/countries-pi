import React from "react";
import { useState } from "react";
import style from "./SearchBar.module.css";
import {useDispatch} from "react-redux";
import {getCountries, getCountriesBySearch} from "../../redux/actions";
import {useHistory} from "react-router-dom"



function SearchBar() {

    const dispatch = useDispatch();
    const history = useHistory(); //--> me redirige a una ruta especifica que seleccione

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
        dispatch(getCountries())
    };


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
