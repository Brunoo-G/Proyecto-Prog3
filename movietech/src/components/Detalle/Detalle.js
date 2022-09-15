import React, {Component} from "react";
import './style.css'

class Detalle extends Component{
    constructor(props){
        super(props);
        this.state = {
            detalle: false,
            favoritos: false

            
        }
    } 
    componentDidMount(){
        let Storage = localStorage.getItem('peliculasFavoritas')
    let storageParseado = JSON.parse(Storage)
    if(storageParseado !== null){
      let esFavorita = storageParseado.includes(this.props.id) 
      if(esFavorita) {
        this.setState({
          favorito:true
        })
      }
    }
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
        .then(resp => resp.json())
        .then(data => 
              this.setState
            ({
            detalle: data,
            
        })  )
        .catch(error => console.log(error))
    
    }

    agregarFavoritos(id){
        let Storage = localStorage.getItem('peliculasFavoritas')
    
        if(Storage === null){
          let array = [id]
          let arrayAString = JSON.stringify(array)
          localStorage.setItem('peliculasFavoritas', arrayAString)
        } else {
          let arrayParseado = JSON.parse(Storage)
          arrayParseado.push(id)
          let arrayAString = JSON.stringify(arrayParseado)
          localStorage.setItem('peliculasFavoritas', arrayAString)
        }
    
        this.setState({
          favorito:true
        })
      }
    
      sacarFavoritos(id){
        let Storage = localStorage.getItem('peliculasFavoritas')
        let storageParseado = JSON.parse(Storage) 
        let filtroStorage = storageParseado.filter(elemento => elemento !== id)
    
        let storageAString = JSON.stringify(filtroStorage)
    
        localStorage.setItem('peliculasFavoritas', storageAString)
    
        this.setState({
          favorito: false
        })
      }

    render(){
        console.log('Este es el state')
        console.log(this.state.detalle)
        return(
        <>
        {this.state.detalle ?
        <main className="detalle"> 
           <div>
                <img src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} alt=""></img>
            </div>
            <div>
                <h1>{this.state.detalle.title}</h1>                    
                <ul>
                    <li> Fecha De Estreno {this.state.detalle.release_date}</li>
                </ul>
                <p> Rating {this.state.detalle.vote_average}</p>
                <p> {this.state.detalle.overview}</p>
                <p> Duracion  {this.state.detalle.runtime} minutos</p>
                <p> Genero {this.state.detalle.genres[1].name}</p>
                {
                  this.state.favorito?
                   <button onClick={()=> this.sacarFavoritos(this.state.detalle.id) }> Eliminar de favoritos</button>
                   :
                   <button onClick={() => this.agregarFavoritos(this.state.detalle.id)} > Agregar a Favoritos</button>
                }
                
            </div>
        </main>: <></> }
        
        </>
        
        )
    } 
}

export default Detalle