import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Countries from "../Countries/Countries";
import {useDispatch} from "react-redux";
import {getCountries} from "../../redux/actions";

function HomePage() {

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getCountries()).then(response => console.log("countries loaded : ", response.data))
    }, [dispatch]);

    return(
        <div>
            <div>
              <Nav/>
            </div>
            <div>
                <Countries/>
            </div>
        </div>
    )
};

export default HomePage;