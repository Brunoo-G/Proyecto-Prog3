import React, {Component} from 'react'
import PeliculasCard from '../PeliculasCard/PeliculasCard';
import './style.css'

class PeliculasFavoritas extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculasFavoritas:[]
        }
    }
    componentDidMount(){
        let Storage = localStorage.getItem('peliculasFavoritas')
        if(Storage !== null){
            let storageParseado = JSON.parse(Storage)
            
            Promise.all(
                storageParseado.map(element =>{
                    return(
                        fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
                        .then(resp => resp.json())
                        .then(data => data))
                })
            )
            .then(data =>{ 
                console.log(data);
                this.setState({
                peliculasFavoritas: data
            })
        })
            .catch(err => console.log(err))
        }
    }

    render(){
        return(
                <div>
                    <section className="card-container">
                    {
                        this.state.peliculasFavoritas.length > 0 ?
                        this.state.peliculasFavoritas.map((element, idx) =>                         
                        <PeliculasCard 
                        key={element + idx} 
                        name={element.title} 
                        image={element.poster_path}
                        descripcion={element.overview}
                        id = {element.id}
                        agregar = {(id) => this.agregarFavoritos(id)}
                        />):
                    <h1>Cargando..</h1> 
                    }

                    </section>

                </div>
        )
    }
}

export default PeliculasFavoritas;