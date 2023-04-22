import React from "react";
import {useDispatch} from "react-redux";
import {orderCountriesByPopulation} from "../../redux/actions";



function OrderByPopulation() {

    const dispatch = useDispatch();


    const handleOrder = (event) => {
        dispatch(orderCountriesByPopulation(event.target.value))
    }


    return(
        <div>
            < select defaultValue={"DEFAULT"} onChange={handleOrder} >
                <option value="DEFAULT" disabled="disabled">Ordenar por Población</option>
                <option value="Ascendent"> Menor Población </option>
                <option value="Descendent"> Mayor Población </option>
            </select>
        </div>
    )
}

export default OrderByPopulation;