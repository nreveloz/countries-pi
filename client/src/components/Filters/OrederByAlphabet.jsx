import React from "react";
import {useDispatch} from "react-redux";
import {orderCountriesByAlphabet} from "../../redux/actions";


function OrderByAlphabet() {

    const dispatch = useDispatch();


    const handleOrder = (event) => {
        dispatch(orderCountriesByAlphabet(event.target.value))
    }


    return(
        <div>
            < select defaultValue={"DEFAULT"} onChange={handleOrder}  style={{border: "3px solid #44bb81", borderRadius: "0.5rem", padding: "0.5rem"}}>
                <option value="DEFAULT" disabled="disabled">Ordenar Alfabéticamente</option>
                <option value="Ascendent"> A-Z </option>
                <option value="Descendent"> Z-A </option>
            </select>
        </div>
    )
}

export default OrderByAlphabet;