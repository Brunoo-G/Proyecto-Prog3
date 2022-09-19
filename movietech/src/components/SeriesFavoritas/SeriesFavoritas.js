import React, {Component} from 'react'
import SeriesCard from '../SeriesCard/SeriesCard';
import './style.css'

class SeriesFavoritas extends Component{
    constructor(props){
        super(props)
        this.state={
            seriesFavoritas:[]
        }
    }
    componentDidMount(){
        let storage = localStorage.getItem('seriesFavoritas')
        if(storage !== null){
            let storageParseado = JSON.parse(storage)
            
            Promise.all(
                storageParseado.map(element =>{
                    return(
                        fetch(`https://api.themoviedb.org/3/tv/${element}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
                        .then(resp => resp.json())
                        .then(data => data))
                })
            )
            .then(data =>{ 
                console.log(data);
                this.setState({
                seriesFavoritas: data
            })
        })
            .catch(err => console.log(err))
        }
    }

    render(){
        return(
                <div>
                    <section className="card-container">
                        {
                        this.state.seriesFavoritas.length > 0 ?
                        this.state.seriesFavoritas.map((element, idx) =>                         
                            <SeriesCard 
                                key={element + idx} 
                                name={element.name} 
                                image={element.poster_path}
                                descripcion={element.overview}
                                id = {element.id}
                                />):
                            <h1>Cargando..</h1>
                      }
                    </section>
                </div>
        )
    }
}

export default SeriesFavoritas;