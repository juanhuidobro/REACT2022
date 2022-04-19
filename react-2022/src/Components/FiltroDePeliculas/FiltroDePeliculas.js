import React, {Component}  from "react"
import "./FiltroDePeliculas.css"

class FiltroDePeliculas extends Component {
    constructor(){
        super();
         this.state= {
             valorInput:""
             
     }
  }

  prevenirRefresh(evento){
    console.log("Refresh evitado con exito")
    evento.preventDefault();
}
  capturaInput(evento){
            this.setState({
                valorInput:  evento.target.value
            }, ()=> this.props.filtroPorTitulo(this.state.valorInput) )
  }



  render() {
     return(
            <form onSubmit={(evento) =>  this.prevenirRefresh(evento)} >
                <label> Buscar Película: </label>
                <input onChange={(evento)=>{this.capturaInput(evento)}}  type="text" />    
 
            </form>

     )


  }
  }
  export default FiltroDePeliculas;