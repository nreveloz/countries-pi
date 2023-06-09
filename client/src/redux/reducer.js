import {
    GET_COUNTRIES,
    GET_COUNTRIES_BY_SEARCH,
    FILTER_BY_CONTINENT,
    POST_ACTIVITIES,
    ORDER_BY_ALPHABET,
    ORDER_BY_POPULATION, GET_ALL_ACTIVITIES, FILTER_COUNTRIES_BY_ACTIVITY, SET_DEFAULT_PAGE,
} from "./actions-types";
import activities from "../components/Activities/Activities";


let initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    errors: {},
    currentPage: 1,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }

        case GET_COUNTRIES_BY_SEARCH:
            return {
                ...state,
                countries: action.payload,
            }

        case POST_ACTIVITIES:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }

        case FILTER_BY_CONTINENT:
            const filteredByContinent = state.allCountries.filter(country => country.continent === action.payload);
            return {
                ...state,
                countries: filteredByContinent,
                currentPage: 1
            }

        case ORDER_BY_ALPHABET:
            return {
                ...state,
                countries: action.payload === 'Ascendent' ?
                    [...state.countries.sort((a, b) => {
                        if (a.name < b.name) {
                            return -1
                        }
                        if (a.name > b.name) {
                            return 1
                        }
                        return 0
                    })] :
                    [...state.countries.sort((a, b) => {
                        if (a.name > b.name) {
                            return -1
                        }
                        if (a.name < b.name) {
                            return 1
                        }
                        return 0
                    })]
            }

        case ORDER_BY_POPULATION:
            return {
                ...state,
                countries: action.payload === 'Ascendent' ? [...state.countries.sort((a, b) => (a.population - b.population))] :
                    [...state.countries.sort((a, b) => b.population - a.population)]
            }

        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }

        case FILTER_COUNTRIES_BY_ACTIVITY: //--> filtro de all countries los q tiene activity id
            const filteredCountriesByActivity = state.allCountries.filter(
                country => country.Activities ?  // valido si un pais tine actividades?
                country.Activities.find(activity => activity.id === Number(action.payload)) //busco en el pais si hay alguna actividad con el id que busco
                : false)
            return {
                ...state,
                countries: filteredCountriesByActivity
            }

        case SET_DEFAULT_PAGE:
            return {
                ...state,
                currentPage: 1,
                countries: [...state.countries]
            }


        default:
            return {...state}
    }
}

export default reducer;