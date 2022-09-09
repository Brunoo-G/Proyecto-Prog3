import React,{Component} from 'react'
import SeriesCard from '../SeriesCard/SeriesCard';
<<<<<<< HEAD
import './style.css'
=======
import { Link } from "react-router-dom"

>>>>>>> c5dd3db02c7efb3cada18dfd3a18f1da093246fe

class Series extends Component {
    constructor(props){
        super(props)
        this.state={
            data: []
            
        }
    }
   

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c')
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results.slice(0,3)
        }))
        .catch(err => console.log(err)) 
    }


  render() {
    return (
<<<<<<< HEAD
    <>
        <div className='series'>
            <h1>SERIES POPULARES</h1>
=======
        <>
            <h2>SERIES POPULARES</h2>  <Link to = "/series" > Ver más </Link>
>>>>>>> c5dd3db02c7efb3cada18dfd3a18f1da093246fe
            
            <section className="card-container">
                {
                    this.state.data.length > 0 ?
                        this.state.data.map((key, idx) => 
                        <SeriesCard 
                        key={key + idx} 
                        name={key.name} 
                        image={key.poster_path}
                        descripcion={key.overview}
                        id = {key.id}
                        />):
                    <h1>Cargando..</h1>
                }
            </section>
        </div>
    </>
    )
  }
}


export default Series