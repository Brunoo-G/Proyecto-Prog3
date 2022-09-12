import React,{Component} from 'react'
import Buscador from '../../components/Buscador/index'
import Resultados from '../../components/Resultados/index';
import Peliculas from "../../components/Peliculas/Peliculas.js";
import Series from "../../components/Series/Series";
import '../Home/style.css';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            data: [],
        }
    }

    buscarPeliculas(titulo){
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=9ea8026abecb25639235199cb1388857&query=${titulo}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results
        }))
        .catch(err => console.log(err))
    }

    render(){
        return(
            <>
            <div className="bienvenida">
                <div>
                    <h1>Bienvenido</h1>
                    <h2>Millones de series, peliculas y personajes por descubrir. Explora Ahora.</h2>
                </div>

                <Buscador filtrar={(titulo) => this.buscarPeliculas(titulo)}/>   
            </div>

            {
                this.state.data.length > 0 ? <Resultados data ={this.state.data}/> :
                <>
                <Peliculas/> 
                <Series/>
                </>
            }
            </>
        )
    }

}

export default Home;