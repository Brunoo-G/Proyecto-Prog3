import React,{Component} from 'react'
import PeliculasCard from '../PeliculasCard/PeliculasCard';
import Buscador from '../Buscador/index';
import { Link } from "react-router-dom"
import './style.css'

class Peliculas extends Component {
    constructor(props){
        super(props)
        this.state={
            data: [],
            verMas: "hide"
            
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=9ea8026abecb25639235199cb1388857&language=en-US&page=1')
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results.slice(0,4)
        }))
        .catch(err => console.log(err))  
    }

    buscarPeliculas(titulo){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=9ea8026abecb25639235199cb1388857&query=${titulo}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results
        }))
        .catch(error => console.log(error))
    }


  render() {
    return (
    <>
        <div className='peliculas'>
            <Buscador filtrar={(titulo) => this.buscarPeliculas(titulo)} />

            <h1>PELÍCULAS POPULARES</h1> 
            <Link to = "/peliculas" ><h3>Ver más</h3>  </Link>

            <section className="card-container">
                {
                    this.state.data.length > 0 ?
                        this.state.data.map((key, idx) => 
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
    </>
    )
  }
}


export default Peliculas