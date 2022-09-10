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

  render(){
    return (
      <article className="pelicula-card">

          <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
          
          <div className='contenido'>
            <h1><Link to={`/detalle/${this.props.id}`}> {this.props.name}</Link></h1>
            <p className={this.state.verMas}>{this.props.descripcion}</p>

            <div className='botones'>
              {this.state.favoritos ? <button onClick={() => this.removeFavoritos(this.props.id)}> Sacar de Favoritos</button>: <button onClick={() => this.agregarFavoritos(this.props.id)} > Agregar a Favoritos</button> }
              <button onClick={() => this.verMas()}>Ver más</button>
            </div>

          </div>

      </article>   
    )
  }
}


export default PeliculasCard