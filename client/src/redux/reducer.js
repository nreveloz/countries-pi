import {GET_COUNTRIES, GET_COUNTRIES_BY_SEARCH,} from "./actions-types";


let initialState = {
    countries: [],
    activities: [],
    errors: {},
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            }

        case GET_COUNTRIES_BY_SEARCH:
            console.log("GET_COUNTRIES_BY_SEARCH: ", action)
            return{
                ...state,
                countries: action.payload,
            }
        default:
            return { ...state }
    }
}

export default reducer;