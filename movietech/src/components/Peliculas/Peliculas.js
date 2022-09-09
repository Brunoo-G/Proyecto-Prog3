import React,{Component} from 'react'
import PeliculasCard from '../PeliculasCard/PeliculasCard';
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


  render() {
    return (
        <>
            <h2>PELÍCULAS POPULARES</h2>

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
        </>
    )
  }
}


export default Peliculas