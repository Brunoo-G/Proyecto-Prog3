import React from "react";
import Peliculas from "../../components/Peliculas/Peliculas.js";
import Series from "../../components/Series/Series";


function Home(){

    return(
        <>
        <div>     
            <h1>Estrenos de Peliculas</h1>
            <Peliculas/>
        </div>
        <div>
            <h1>Estrenos de Series</h1> 
            <Series/>
        </div>
        </>
    )
    
}

export default Home;