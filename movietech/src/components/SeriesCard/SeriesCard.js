import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './style.css'


class SeriesCard extends Component {

  constructor(props){
    super(props)
    this.state ={
      verMas: 'hide',
      value:""
    }
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
                <button onClick={() => this.props.agregarFavoritos(this.props.id)} > Agregar a Favoritos</button>
              </div>
          </div>
     
      </article>
    )
  }
}


export default SeriesCard