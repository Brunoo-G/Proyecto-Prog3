import React, {Component} from 'react'
import PeliculasFavoritas from "../../components/PeliculasFavoritas/PeliculasFavoritas.js";
import SeriesFavoritas from "../../components/SeriesFavoritas/SeriesFavoritas.js";
import './style.css'

function Favoritos(){

    return(
        <>
        <div className="titulo">
            <h1>PELÍCULAS FAVORITAS</h1>
        </div>
        <div>     
            <PeliculasFavoritas/>
        </div>
        <div className="titulo">
            <h1>SERIES FAVORITAS</h1>
        </div>
        <div>     
            <SeriesFavoritas/>
        </div>
        </>
    )
    
}

export default Favoritos;