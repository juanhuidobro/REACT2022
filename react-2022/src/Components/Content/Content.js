import React,{Component} from "react";



class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
          
            
        }

    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US`)
        .then(response => response.json())
        .then( (info) => {
            console.log(info.data);
            this.setState({
              

            })
            
        })
        .catch( error => console.log(error));
    }
}



export default Content;