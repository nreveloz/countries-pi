import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Countries from "../Countries/Countries";
import {useDispatch, useSelector} from "react-redux";
import {getAllActivities, getCountries} from "../../redux/actions";
import ContinentFilter from "../Filters/ContinentFilter";
import OrderByAlphabet from "../Filters/OrederByAlphabet";
import OrderByPopulation from "../Filters/OrderByPopulation";
import FilterByActivity from "../Filters/FilterByActivity";
import style from "./Home.module.css";

function HomePage() {

    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)

    useEffect( () => {
        if(!countries.length) {
            dispatch(getCountries())
        }
        dispatch(getAllActivities())
    }, [dispatch]);

    return(
        <div>
            <div>
              <Nav/>
            </div>
            <div className={style.orderByDiv}>
                <OrderByAlphabet/>
                <OrderByPopulation/>
                <ContinentFilter/>
                <FilterByActivity/>
            </div>
            <div>
                <Countries/>
            </div>
        </div>
    )
};

export default HomePage;