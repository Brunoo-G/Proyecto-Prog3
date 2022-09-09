import React from "react";
import Buscador from '../../components/Buscador/index'
import Peliculas from "../../components/Peliculas/Peliculas.js";
import Series from "../../components/Series/Series";
import '../Home/style.css'


function Home(){

    return(
        <>
        <div className="bienvenida">
            <div>
                <h1>Bienvenido</h1>
                <h2>Millones de series, peliculas y personajes por descubrir. Explora Ahora.</h2>
            </div>

            <div>
                <Buscador />   
            </div>
        </div>

        <div>     
            <Peliculas/>
        </div>

        <div>
            <Series/>
        </div>
        </>
    )
    
}

export default Home;