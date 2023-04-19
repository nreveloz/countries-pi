import {GET_COUNTRIES, GET_COUNTRIES_BY_SEARCH} from "./actions-types";
import axios from "axios";

export const getCountries = () => {
    return async function (dispatch) {
        try {
            const responseFromBackend = await axios.get (
                "http://localhost:3001/countries",
            );
            console.log("response from backend ", responseFromBackend)
            return dispatch (
                { type: GET_COUNTRIES, payload: responseFromBackend.data }
            )
        } catch(error) {
            return dispatch( { type: "ERROR", payload:error })
        };
    };
};

export const getCountriesBySearch = (name) =>{
    return async function (dispatch) {
        try {
            const responseFromBackend = await axios.get(
                `http://localhost:3001/countries/?name=${name}`);
            console.log("response from action getCountriesBySearch", responseFromBackend)
            return dispatch(
                {
                    type: GET_COUNTRIES_BY_SEARCH, payload: responseFromBackend.data
                }
            )
        } catch (err) {
            return dispatch({type: "ERROR", payload: err})
        }
    }
}
