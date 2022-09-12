import React, {Component} from "react";
import './style.css'
 

class DetalleSerie extends Component{
    constructor(props){
        super(props);
        this.state = {
            detalle: {},
            
        }
    } 
    componentDidMount(){
        console.log("hola");
        fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
        .then(resp => resp.json())
        .then(data => 
              this.setState
            ({
            detalle: data,
            
        })  )
        .catch(error => console.log(error))
    
    }
    render(){
        return(
          <>
        <main> 
           <div class="portada">
                <img class="imgLaptop" src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} alt=""></img>
            </div>
            <div class="contenido">
                <h1>{this.state.detalle.title}</h1>                    
                <ul class="detalles">
                    <li class="fechaDeEstreno">{this.state.detalle.release_date}</li>
                </ul>
                <p class="rating">{this.state.detalle.vote_average}</p>
                <p class="sinopsis">{this.state.detalle.overview}</p>
                
            </div>
        </main>
        </>
        )
    } 
}

export default DetalleSerie