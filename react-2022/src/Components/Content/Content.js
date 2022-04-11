import React,{Component} from "react";
import Card from "../Card/Card";




class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
         contenido: []
            
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
        return(
            <div> 
           { this.state.contenido.map( (popular,index) => {
              return <Card key = {index} title = {popular.title} ></Card>
             
            } ) }  
          </div>
        )
    }
 

}




export default Content;