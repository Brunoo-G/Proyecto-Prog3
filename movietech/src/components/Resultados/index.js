import React from 'react';
import PeliculasCard from '../PeliculasCard/PeliculasCard';

function Resultados(props) {

    return(
        <div>
            <h1>Resultados de Busqueda</h1>

            <section className="card-container">
                {
                    props.data.length > 0 ?
                        props.data.map((key, idx) => 
                        <PeliculasCard 
                        key={key + idx} 
                        name={key.title} 
                        image={key.poster_path}
                        descripcion={key.overview}
                        id = {key.id}
                        agregar = {(id) => this.agregarFavoritos(id)}
                        />):
                    <h1>Cargando..</h1>
                }
            </section>
           
        </div>
    )
}

export default Resultados;

