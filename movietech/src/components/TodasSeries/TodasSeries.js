import React,{Component} from 'react'
import SeriesCard from '../SeriesCard/SeriesCard';
import './style.css'

class TodasSeries extends Component {
    constructor(props){
        super(props)
        this.state={
            data: [],
            pagina: 1
            
        }
    }
   
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c')
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results
        }))
        .catch(err => console.log(err)) 
    }

    mostrarMas(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9ea8026abecb25639235199cb1388857&language=en-US&page=${this.state.pagina}`)
        .then(res => res.json())
        .then(data => this.setState({
            data: this.state.data.concat(data.results),
            pagina: this.state.pagina + 1
        }))
        .catch(err => console.log(err))
    }

  render() {
    return (
        <>
            <div className='peliculas'>
                <h1>TODAS LAS SERIES</h1>
            </div>
            
            <section className="card-container">
                {
                    this.state.data.length > 0 ?
                        this.state.data.map((key, idx) => 
                        <SeriesCard 
                        key={key + idx} 
                        name={key.name} 
                        image={key.poster_path}
                        descripcion={key.overview}
                        id = {key.id}
                        />):
                    <h1>Cargando..</h1>
                }
            </section>
            <div className='boton_card'>
                <button className='boton' onClick={()=> this.mostrarMas()}> Cargar Más </button>
            </div>
        </>
    )
  }
}


export default TodasSeries