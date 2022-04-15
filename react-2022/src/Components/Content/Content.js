import React,{Component} from "react";
import Card from "../Card/Card";


class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
         contenido: [],
         display: "row"
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US&page=1')
        .then(response => response.json())
        .then(data => 
        
            this.setState({
                contenido: data.results
            })
            )
            .catch( error => console.log(error));
    
    }
    render (){
        console.log('renderizando')
        console.log(this.state.contenido)
        return(
            <div> 
           { this.state.contenido.map( (popular,index) => {
              return <Card key = {index} title = {popular.title} image= {popular.poster_path} ></Card>
             
            } ) }  
          </div>
        )
    }
 

}




export default Content;