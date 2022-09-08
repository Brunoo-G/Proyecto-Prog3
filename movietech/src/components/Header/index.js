import React from "react";
import { Link } from "react-router-dom"
import './styles.css'

function Header(){

    return(
        <header>
            <Link to = "/" > Home </Link>
            <Link to = "/favoritos" > Favoritos </Link>
            <Link to = "/populares" > Populares </Link>
            <Link to = "/estrenos" > Estrenos </Link>

            <img className="logo" src="/img/logo.png" />
        </header>
    )
}

export default Header;