import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './style.css'


class SeriesCard extends Component {

  constructor(props){
    super(props)
    this.state ={
      verMas: 'hide',
      favorito: false ,
      value:""
    }
  }

  verMas(){
    if(this.state.verMas === 'show'){
        this.setState({
            verMas: 'hide'
        })
    } else {
        this.setState({
            verMas: 'show'
      })
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
    return (
      <article className="series-card">

          <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""></img>
        
          <div className='contenido'>
              <h1> <Link to={`/detalleSerie/${this.props.id}`}> {this.props.name}</Link> </h1>
              <p className={this.state.verMas}>{this.props.descripcion}</p> {/* este deberia solo aparecer si tocamos el Ver mas */}
              
              <div className='botones'>
                <button onClick={() => this.verMas()}>Ver más</button>
                {
                  this.state.favorito?
                   <button onClick={()=> this.sacarFavoritos(this.props.id) }> Eliminar de favoritos</button>
                   :
                   <button onClick={() => this.agregarFavoritos(this.props.id)} > Agregar a Favoritos</button>
                }
              </div>
          </div>
     
      </article>
    )
  }
}


export default SeriesCard