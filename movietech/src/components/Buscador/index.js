import React, {Component} from 'react'
import '../Buscador/style.css'

class Buscador extends Component{
    constructor(props){
        super(props)
        this.state={
            valos:''
        }
    }

    evitarSubmit(event){
        event.preventDefault(event)
    }

    controlarCambios(event){
        this.setState({
            valor: event.target.value
        },
        () => console.log(this.state.valor)
        )
    }

    render(){
        return( 
            <form onSubmit={(event) => this.evitarSubmit(event)}>
                <input type='text'placeholder="¿Qué te gustaria ver hoy?"  onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
                <button>Buscar </button>
            </form>
        )
    }
}

export default Buscador;