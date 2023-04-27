import React, {useEffect, useState} from "react";
import Country from "./Country";
import style from "./Countries.module.css";
import {useSelector} from "react-redux";


function Countries() {

    const countries = useSelector((state) => state.countries)

    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumber, setMaxPageNumber] = useState(5);
    const [minPageNumber, setMinPageNumber] = useState(0);

    const indexOfLastPage = currentPage * countriesPerPage;
    const indexOfFirstPage = indexOfLastPage - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstPage, indexOfLastPage)
    //-->SLICE trae  grupos de arrays de paises de 10 en 10

    const pages = [];
    fillPages()
    function fillPages() {
        for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
            pages.push(i);
        }
    }

    useEffect(() => {
        fillPages()
        /// ME PONE LA BARRA DEL PAGINADO EN EL ESTADO INICIAL RANGO 1-5
        setCurrentPage(1)
        setMaxPageNumber(5)
        setMinPageNumber(0)
    }, [countries]);


    const onPageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const renderPageNumbers = pages.map((number) => {
        if ((number <= maxPageNumber && number > minPageNumber) || pages.length === 1) {
            return (
                <li key={number}
                    id={number}
                    onClick={onPageChange}
                    style={currentPage === number ? {background: "grey", color: "black"} : {
                        background: "white",
                        color: " black"
                    }}
                >
                    {number}
                </li>
            )
        } else {
            return null
        }

    })

    const onPrevPage = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumber(maxPageNumber - pageNumberLimit);
            setMinPageNumber(minPageNumber - pageNumberLimit);
        }
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumber) {
            setMaxPageNumber(maxPageNumber + pageNumberLimit);
            setMinPageNumber(minPageNumber + pageNumberLimit);
        }
    }

    return (
        <div>
            <ul className={style.pageNumbers}>
                <button className={style.pageButton} onClick={onPrevPage} disabled={currentPage === pages[0]}>
                    Prev
                </button>
                {renderPageNumbers}
                <button className={style.pageButton} onClick={onNextPage}
                        disabled={currentPage === pages[pages.length - 1]}>
                    Next
                </button>
            </ul>
            <h2 className={style.countriesH2}> PAÍSES </h2>
            <br/>
            <div className={style.countriesDiv}>
                {
                    currentCountries?.map(({
                                               id,
                                               flag_image,
                                               name,
                                               continent,
                                               population,
                                               capital_city,
                                               region,
                                               subregion,
                                               area
                                           }) => {
                        return <Country
                            key={id}
                            id={id}
                            name={name}
                            flag_image={flag_image}
                            continent={continent}
                            population={population}
                            capital_city={capital_city}
                            region={region}
                            subregion={subregion}
                            area={area}
                        />
                    })
                }
            </div>
        </div>
    )
};

export default Countries;
