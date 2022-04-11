import React,{Component} from "react";

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        return(
            <div className="card-container">
                {/* imagen de la pelicula */}
                    <div className="image-container">
                      <img className="image" src={this.props.dataPeliculas.cover_big} alt="" />
                    </div>
                {/* titulo pelicula */}
                      <h3>{this.props.dataPeliculas.title}</h3>
                    {/* decripcion de la pelicula */}
                      <p className="description">{this.props.dataPeliculas.record_type.toUpperCase()}</p>
               
            </div>
        )
    }
}



export default Card; 