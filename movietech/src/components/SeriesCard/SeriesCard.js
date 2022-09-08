import React, {Component} from 'react'
import { Link } from 'react-router-dom'


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
    <section className="">
        <a className="">
            <article className="">
                <img className="" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""></img>
                <div className="">
                    <p className=""> <Link to={`/detalleSerie/${this.props.id}`}> {this.props.name}</Link> </p>
                    <p className={this.state.verMas}>{this.props.descripcion}</p> {/* este deberia solo aparecer si tocamos el Ver mas */}
                    <button onClick={() => this.verMas()}>Ver más</button>
                    <button onClick={() => this.props.agregarFavoritos(this.props.id)} > Agregar a Favoritos</button>
                </div>
            </article>
        </a>
    </section>
    )
  }
}


export default SeriesCard