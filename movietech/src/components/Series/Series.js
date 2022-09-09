import React,{Component} from 'react'
import SeriesCard from '../SeriesCard/SeriesCard';


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
        <>
            <h2>SERIES POPULARES</h2>
            
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
        </>
    )
  }
}


export default Series