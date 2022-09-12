import React, {Component} from 'react'
import PeliculasFavoritas from "../../components/PeliculasFavoritas/PeliculasFavoritas.js";
import SeriesFavoritas from "../../components/SeriesFavoritas/SeriesFavoritas.js";

function Favoritos(){

    return(
        <>
        <div>
            <h1>Películas favoritas:</h1>
        </div>
        <div>     
            <PeliculasFavoritas/>
        </div>
        <div>
            <h1>Series favoritas:</h1>
        </div>
        <div>     
            <SeriesFavoritas/>
        </div>
        </>
    )
    
}

export default Favoritos;