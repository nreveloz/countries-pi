import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Countries from "../Countries/Countries";
import axios from "axios";
import style from "./Home.module.css";
import {useDispatch} from "react-redux";
import {getCountries} from "../../redux/actions";





function HomePage() {

    const [ countries, setCountries ] = useState([]);
    const [ countriesPerPage, setCountriesPerPage ] = useState(10);
    const [ currentPage, setCurrentPage ] = useState(1);
    const  [ pageNumberLimit, setPageNumberLimit ] = useState(5);
    const  [ maxPageNumber, setMaxPageNumber ] = useState(5);
    const  [ minPageNumber, setMinPageNumber ] = useState(0);

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getCountries())
    }, [dispatch]);

    const handleOnChange = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const pages = [];
    console.log("countries in pages : ", countries)
    for( let i = 1; i <= Math.ceil(countries.length/countriesPerPage); i++ ){
        pages.push(i);
    }

    const renderPageNumbers = pages.map( (number) => {
        if( number <= maxPageNumber && number > minPageNumber) {
            return(
                <li key={number}
                    id={number}
                    onClick={handleOnChange}
                    style={ currentPage === number ?  { background: "black", color : "white"} : { background: "white", color:" black"} }
                    //className={currentPage === number ? "active" : "inactive" }
                >
                    {number}
                </li>
            )
        }
        else {
            return null
        }

    })

    const indexOfLastPage = currentPage * countriesPerPage;
    const indexOfFirstPage = indexOfLastPage - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstPage, indexOfLastPage)


    // const getAllCountries = () => {
    //     axios.get (
    //         "http://localhost:3001/countries",
    //     ).then( response => {
    //         setCountries(response.data)
    //     } )
    // }



    // useEffect( () => {
    //     dispatch(getCountries());
    // }, [dispatch]);


    const handleNext = () => {
        setCurrentPage(currentPage + 1);
        if( currentPage + 1 > maxPageNumber ){
            setMaxPageNumber(maxPageNumber + pageNumberLimit);
            setMinPageNumber( minPageNumber + pageNumberLimit);
        }
    }

    const handlePreview = () => {
        setCurrentPage(currentPage - 1);

        if( (currentPage - 1) % pageNumberLimit === 0 ){
            setMaxPageNumber(maxPageNumber - pageNumberLimit);
            setMinPageNumber( minPageNumber - pageNumberLimit);
        }
    }


    return(
        <div>
            <div>
              <Nav/>
            </div>
            <div>
                <div>
                <ul className={style.pageNumbers} >
                    <button className={style.pageButton} onClick={handlePreview} disabled={ currentPage === pages[0] }>
                        Prev
                    </button>
                    {renderPageNumbers}
                    <button className={style.pageButton} onClick={handleNext} disabled={ currentPage === pages[pages.length - 1] }>
                        Next
                    </button>
                </ul>
                </div>
                <Countries
                    countries={currentCountries}
                />
            </div>
        </div>
    )
};

export default HomePage;