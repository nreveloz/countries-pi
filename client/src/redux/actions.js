import {
    GET_COUNTRIES,
    GET_COUNTRIES_BY_SEARCH,
    POST_ACTIVITIES,
    FILTER_BY_CONTINENT,
    ORDER_BY_ALPHABET,
    ORDER_BY_POPULATION,
    GET_ALL_ACTIVITIES, FILTER_COUNTRIES_BY_ACTIVITY, SET_DEFAULT_PAGE
} from "./actions-types";
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
        }
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
};

export const createActivity = (activity) => {
    return async function (dispatch) {
        try {
            const newActivity = await axios.post(
                'http://localhost:3001/activities/create-activity',
                activity
            )
            dispatch({
                type: POST_ACTIVITIES, payload: newActivity.data
            })
        }
        catch (error){
            return error
        }
    }
};

export const filterCountriesByContinent = (continent) => {
    return { type: FILTER_BY_CONTINENT, payload:continent }
};

export const orderCountriesByAlphabet = (name) => {
    return { type: ORDER_BY_ALPHABET, payload: name }
};

export const orderCountriesByPopulation = (population) => {
    return { type: ORDER_BY_POPULATION, payload: population }
};

export const getAllActivities = () => {
    return async function (dispatch) {
        try {
            const responseFromBackend = await axios.get(
                "http://localhost:3001/activities",
            );
            console.log("response from backend ", responseFromBackend)
            return dispatch(
                {type: GET_ALL_ACTIVITIES, payload: responseFromBackend.data}
            )
        } catch (error) {
            return error
        }
    }
};

export const filterCountriesByActivity = (activityId) => {
    return { type: FILTER_COUNTRIES_BY_ACTIVITY, payload: activityId }
};

export const setDefaultPage = () => {
    return { type: SET_DEFAULT_PAGE }
};