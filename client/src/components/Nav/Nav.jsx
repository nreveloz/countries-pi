import {Link} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import {useDispatch} from "react-redux";
import {getCountries} from "../../redux/actions";

const Nav = () => {

    const dispatch = useDispatch();



    return(
        <div className={style.navDiv}>
            <nav className={style.navNav}>
                <Link to='/countries'  className={style.navLink} >🏠HOME/PAISES
                    {/*<span onClick={dispatch(getCountries)}>🏠HOME/PAISES </span>*/}
                </Link>
                <Link to='/activities' className={style.navLink}> CREAR ACTIVIDAD </Link>
                <Link to='/'  className={style.navLink} > SALIR </Link>
                <div>
                    <SearchBar/>
                </div>
            </nav>
        </div>
    )
};

export default Nav;