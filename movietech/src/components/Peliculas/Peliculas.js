import React,{Component} from 'react'
import PeliculasCard from '../PeliculasCard/PeliculasCard';


class Peliculas extends Component {
    constructor(props){
        super(props)
        this.state={
            data: [],
            verMas: "hide"
            
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c')
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results
        }))
        .catch(err => console.log(err)) 
    }


  render() {
    return (
        <>
<<<<<<< HEAD
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
=======
        <div className="palabra">
            <h3>PELÍCULAS POPULARES</h3>
        </div>
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
>>>>>>> 8a5d7e3be71a7ecfb4a7e5899e399e0bd105dfe7
        </>
    )
  }
}


export default Peliculas