import React, {Component} from "react";
import './style.css'
 

class DetalleSerie extends Component{
    constructor(props){
        super(props);
        this.state = {
            detalle: {},
            favorito: false,
            value:""
            
        }
    } 
    componentDidMount(){
        let Storage = localStorage.getItem('seriesFavoritas')
        let storageParseado = JSON.parse(Storage)
        if(storageParseado !== null){
        let esFavorita = storageParseado.includes(this.props.id) 
        if(esFavorita) {
          this.setState({
            favorito:true
        })
        }
    }
        fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
        .then(resp => resp.json())
        .then(data => 
              this.setState
            ({
            detalle: data,
            
        })  )
        .catch(error => console.log(error))
    
    }


    agregarFavoritos(id){
        let Storage = localStorage.getItem('seriesFavoritas')
    
        if(Storage === null){
          let array = [id]
          let arrayAString = JSON.stringify(array)
          localStorage.setItem('seriesFavoritas', arrayAString)
        } else {
          let arrayParseado = JSON.parse(Storage)
          arrayParseado.push(id)
          let arrayAString = JSON.stringify(arrayParseado)
          localStorage.setItem('seriesFavoritas', arrayAString)
        }
    
        this.setState({
          favorito:true
        })
      }
    
      sacarFavoritos(id){
        let Storage = localStorage.getItem('seriesFavoritas')
        let storageParseado = JSON.parse(Storage) 
        let filtroStorage = storageParseado.filter(elemento => elemento !== id)
    
        let storageAString = JSON.stringify(filtroStorage)
    
        localStorage.setItem('seriesFavoritas', storageAString)
    
        this.setState({
          favorito: false
        })
      }

    render(){
        return(
        <div className="card_detalle">
          <main className="detalle"> 
              <div>
                  <img src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} alt=""></img>
              </div>
              <div className="datos_detalle">
                  <h1>{this.state.detalle.original_name}</h1>                    
                  <p> <b>Fecha de Estreno:</b> {this.state.detalle.first_air_date}</p>
                  <p> <b>Rating:</b> {this.state.detalle.vote_average}</p>
                  <p> <b>Sinópsis:</b> {this.state.detalle.overview}</p>
                  <p> <b>Genero:</b> Aventura</p>
                  {
                  this.state.favorito?
                  <button onClick={()=> this.sacarFavoritos(this.state.detalle.id) }> Eliminar de favoritos</button>
                  :
                  <button onClick={() => this.agregarFavoritos(this.state.detalle.id)} > Agregar a Favoritos</button>
                  }
              </div>
          </main>
        </div>
        )
    } 
}

export default DetalleSerie