import React,{Component} from "react";
import "../../css/Uikit.css";

let ImagenPosta = "https://image.tmdb.org/t/p/original" //herramienta que nos deja traer imagenes

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            viewMore: false,
            text: 'Ver más',
        }
    }
    //ver mas
    verMas(){
        if(this.state.viewMore){
            this.setState({
                viewMore: false,
                text: 'Ver más'
            })
        } else {
            this.setState({
                viewMore: true,
                text: 'Ver menos'
            })            
        }
      }
     
    render() {
    return (
            <div class="uk-card uk-card-hover">
             <section className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>     
                <div> {this.props.title} </div>
                <img src={`${ImagenPosta}${this.props.image}`} alt="" width="200" height="300"/>
             </section>
                {/* Boton VerMas */}
                      <button class="uk-button uk-button-secondary uk-width-1-1"> 
                      <p onClick={()=>this.verMas()}>
                {this.props.description}</p>
                      </button>
            </div>
    )
}
    
}



export default Card; 