import React,{Component} from "react";
import "../../css/Uikit.css"

let ImagenPosta = "https://image.tmdb.org/t/p/original" //herramienta que nos deja traer imagenes

class Card extends Component{
    constructor(props){
        super(props)
     
    }
    
     
    render() {
    return (
            <div class="uk-card uk-card-hover">
                <div> {this.props.title} </div>
                <img src={`${ImagenPosta}${this.props.image}`} alt="" width="200" 
     height="300"/>
            </div>
    )
}
    
}



export default Card; 