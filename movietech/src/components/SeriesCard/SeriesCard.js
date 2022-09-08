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
              <div>
                  <p> <Link to={`/detalleSerie/${this.props.id}`}> {this.props.name}</Link> </p>
                  <p className={this.state.verMas}>{this.props.descripcion}</p> {/* este deberia solo aparecer si tocamos el Ver mas */}
                  <button onClick={() => this.verMas()}>Ver más</button>
                  <button onClick={() => this.props.agregarFavoritos(this.props.id)} > Agregar a Favoritos</button>
              </div>
          </article>
    )
  }
}


export default SeriesCard