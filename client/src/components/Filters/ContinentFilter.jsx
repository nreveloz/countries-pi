import React from "react";
import {useDispatch} from "react-redux";
import {filterCountriesByContinent, setDefaultPage} from "../../redux/actions";


function FilterByContinent() {

    const dispatch = useDispatch();


    const handleOrder = (event) => {
        dispatch(filterCountriesByContinent(event.target.value))
    }


    return(
        <div>
            < select defaultValue={"DEFAULT"} onChange={handleOrder} style={{border: "3px solid #44bb81", borderRadius: "0.5rem", padding: "0.5rem"}} >
                <option value="DEFAULT" disabled="disabled">Filtrar por Continente </option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Antarctic">Antártida</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceanía</option>
            </select>
        </div>
    )
}

export default FilterByContinent;