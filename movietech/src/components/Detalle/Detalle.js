import React, {Component} from "react";
import './style.css'

class Detalle extends Component{
    constructor(props){
        super(props);
        this.state = {
            detalle: false,

            
        }
    } 
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
        .then(resp => resp.json())
        .then(data => 
              this.setState
            ({
            detalle: data,
            
        })  )
        .catch(error => console.log(error))
    
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
                
            </div>
        </main>: <></> }
        
        </>
        
        )
    } 
}

export default Detalle