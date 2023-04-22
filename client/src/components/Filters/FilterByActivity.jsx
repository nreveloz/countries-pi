import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {filterCountriesByActivity} from "../../redux/actions";


function FilterByActivity() {

    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities);


    const handleOrder = (event) => {
        dispatch(filterCountriesByActivity(event.target.value))
    }


    return(
        <div>
            < select defaultValue={"DEFAULT"} onChange={handleOrder} >
                <option value="DEFAULT" disabled="disabled">Filtrar por Actividad</option>
                {
                    activities.map(activity =>
                        <option key={activity.id} value={activity.id}>{activity.name}</option>
                    )
                }
            </select>
        </div>
    )
}

export default FilterByActivity;