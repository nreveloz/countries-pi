// import React, {useState} from "react";
// import style from "../HomePage/Home.module.css";
//
//
// function Paginated(){
//
//     const [ countries, setCountries ] = useState([] );
//     const [ countriesPerPage, setCountriesPerPage ] = useState(10);
//     const [ currentPage, setCurrentPage ] = useState(1);
//
//
//     const  [ pageNumberLimit, setPageNumberLimit ] = useState(5);
//     const  [ maxPageNumber, setMaxPageNumber ] = useState(5);
//     const  [ minPageNumber, setMinPageNumber ] = useState(0);
//
//
//
//     const handleOnChange = (event) => {
//         console.log(event)
//         setCurrentPage(Number(event.target.id));
//     }
//
//     const pages = [];
//     for( let i = 1; i <= Math.ceil(countries.length/countriesPerPage); i++ ){
//         pages.push(i);
//     }
//
//     const renderPageNumbers = pages.map( (number) => {
//         if( number <= maxPageNumber && number > minPageNumber) {
//             return(
//                 <li key={number}
//                     id={number}
//                     onClick={handleOnChange}
//                     style={ currentPage === number ?  { background: "black", color : "white"} : { background: "white", color:" black"} }
//                     //className={currentPage === number ? "active" : "inactive" }
//                 >
//                     {number}
//                 </li>
//             )
//         }
//         else {
//             return null
//         }
//     })
//
//     const indexOfLastPage = currentPage * countriesPerPage;
//     const indexOfFirstPage = indexOfLastPage - countriesPerPage;
//     const currentCountries = countries.slice(indexOfFirstPage, indexOfLastPage)
//
//
//     const handleNext = () => {
//         setCurrentPage(currentPage + 1);
//
//         if( currentPage + 1 > maxPageNumber ){
//             setMaxPageNumber(maxPageNumber + pageNumberLimit);
//             setMinPageNumber( minPageNumber + pageNumberLimit);
//         }
//     }
//
//     const handlePreview = () => {
//         setCurrentPage(currentPage - 1);
//
//         if( (currentPage - 1) % pageNumberLimit === 0 ){
//             setMaxPageNumber(maxPageNumber - pageNumberLimit);
//             setMinPageNumber( minPageNumber - pageNumberLimit);
//         }
//     }
//
//     return (
//         <ul className={style.pageNumbers} >
//             <button className={style.pageButton} onClick={handlePreview} disabled={ currentPage === pages[0] }>
//                 Prev
//             </button>
//             {renderPageNumbers}
//             <button className={style.pageButton} onClick={handleNext} disabled={ currentPage === pages[pages.length - 1] }>
//                 Next
//             </button>
//         </ul>
//     )
// }
//
// export default Paginated;