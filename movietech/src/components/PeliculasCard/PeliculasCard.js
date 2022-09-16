import React, {Component} from 'react'
import {Link} from "react-router-dom"
import './style.css'

class PeliculasCard extends Component {

  constructor(props){
    super(props)
    this.state ={
      verMas: 'hide',
      favoritos: false

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
    return (
      <article className="pelicula-card">

          <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
          
          <div className='contenido'>
            <h1><Link to={`/detalle/${this.props.id}`}> {this.props.name}</Link></h1>
            <p className={this.state.verMas}>{this.props.descripcion}</p>

            <div className='botones'>

              {
               this.state.verMas === 'hide' ?
               <button onClick={() => this.verMas()}>Ver más</button> :
               <button onClick={() => this.verMas()}>Ver menos</button>
              }
              
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


export default PeliculasCard