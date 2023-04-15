import {Link} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Nav = () => {
    return(
        <div>
            <nav>
                <Link to='/countries' > 🏠HOME/PAISES </Link>
                <Link to={'/activities'}> CREAR ACTIVIDAD </Link>
                <Link to='/about' > CREADOR </Link>
                <Link to='/'> SALIR </Link>
                <div>
                    <SearchBar/>
                </div>
            </nav>
        </div>
    )
};

export default Nav;