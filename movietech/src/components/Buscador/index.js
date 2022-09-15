import React, {Component} from 'react'
import '../Buscador/style.css'

class Buscador extends Component{
    constructor(props){
        super(props)
        this.state={
            valor:''
        }
    }

    evitarSubmit(event){
        event.preventDefault(event)
    }

    controlarCambios(event){
        this.setState({
            valor: event.target.value
        },
        () => this.props.filtrar(this.state.valor)
        )
    }

    render(){
        return( 
            <form className='buscador' onSubmit={(event) => this.evitarSubmit(event)}>
                <input type='text'placeholder="¿Qué te gustaria ver hoy?"  onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
            </form>
        )
    }
}

export default Buscador;