import React,{Component} from "react";
import "../../css/uikit.css";

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
    viewMore(){
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
            <div class="uk-card uk-card-hover" >
                <div class="uk-text-center">
        <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
            <img src={`${ImagenPosta}${this.props.image}`} alt="" width="200" height="300"/>
            <div class="uk-position-center">
                <div class="uk-transition-slide-top-small"><h4 class="uk-margin-remove">{this.props.title}</h4></div>
                <div class="uk-transition-slide-bottom-small"><h4 class="uk-margin-remove">{this.props.estrellas} </h4></div>
            </div>
        </div>
        <p class="uk-margin-small-top">{this.props.title}</p>
    </div>    
                <section className={this.state.viewMore === false ? 'hide' : 'show'}>
                    <p>{this.props.description}</p>
                </section>
                <button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
                name={this.state.viewMore} onClick={() => this.viewMore()}>VER MAS</button>
                <button class="uk-button uk-button-secondary uk-width-1-1" onClick={() => this.props.remove(this.props.contenido.id)}>ELIMINAR PELICULA</button>
            </div>
    )
}
    
}



export default Card; 