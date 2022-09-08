import React from "react";
import Peliculas from "../../components/Peliculas/Peliculas.js";
import Series from "../../components/Series/Series";


function Home(){

    return(
        <>
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