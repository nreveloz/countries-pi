import React from "react";
import { useState } from "react";


function SearchBar(){

    const [ input, setInput ] = useState("");

    const handleOnChange = (event) => {   //---> Para limpiar la barra
        setInput(event.target.value);

    }

    return (
        <div>
            <input type='search' placeholder='Buscar país'
                   value={input} onChange={handleOnChange}/>
            <button > {/*onClick={() => onClickHandler()}*/}
                    Search
            </button>
        </div>
    );
};

export default SearchBar;
