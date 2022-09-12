import React, {Component} from 'react'

class Favoritos extends Component{
    constructor(props){
        super(props)
        this.state={
            personaje:[]
        }
    }
    componentDidMount(){
        let Storage = localStorage.getItem('peliculasFavoritas')
        if(Storage!== null){
            let storageParseado = JSON.parse(Storage)
            
            Promise.all(
                storageParseado.map(element =>{
                    return(
                        fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
                        .then(resp => resp.json())
                        .then(data => data))
                })
            )
            .then(data => console.log(data))
        }
    }

    render(){
        return(
            <h1>
                Favoritos
            </h1>
        )
    }
}

export default Favoritos;