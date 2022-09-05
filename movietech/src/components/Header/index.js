import React from "react";
import Home from "../Home/index"
import Favoritos from "../Favoritos/index"
import Populares from "../Populares/index"
import Estrenos from "../Estrenos/index"
import { Link, Route, Switch } from "react-router-dom"
import './styles.css'

function Header(){

    return(
        <>
            <header>
                <Link to = "/" > Home </Link>
                <Link to = "/favoritos" > Favoritos </Link>
                <Link to = "/populares" > Populares </Link>
                <Link to = "/estrenos" > Estrenos </Link>
            </header>
            <div>
                <Switch>
                    <Route exact path = "/" component={Home}/>
                    <Route exact path = "/favoritos" component={Favoritos}/>
                    <Route exact path = "/populares" component={Populares}/>
                    <Route exact path = "/estrenos" component={Estrenos}/>
                </Switch>  
            </div>
        </>
    )
}

export default Header;