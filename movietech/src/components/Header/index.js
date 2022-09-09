import React from "react";
import { Link } from "react-router-dom"
import './styles.css'

function Header(){

    return(
        <header>
            <img className="logo" src="/img/logo.png" /> 
            
            <Link to = "/" > Home </Link>
            <Link to = "/favoritos" > Favoritos </Link>
            <Link to = "/series" > Series </Link>
            <Link to = "/peliculas" > Peliculas </Link>
        </header>
    )
}

export default Header;