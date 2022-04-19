import React,{Component} from "react";
import Card from "../Card/Card";


class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            pagina: 1,
            peliculasOriginales: [], 
            display: props.display,
            orientacion: "row"
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US')
        .then(response => response.json())
        .then(data => 
        
            this.setState({
                peliculas: data.results, 
                peliculasOriginales: data.results,
                pagina: this.state.pagina + 1
            })
            )
            .catch( error => console.log(error));
    }

    addCard(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US&page=${this.state.pagina}`)
        .then( response => response.json())
        .then( data  => {
            this.setState({
            peliculas: this.state.peliculas.concat(data.results),
            pagina: this.state.pagina + 1 
        })})
        .catch( error => console.log(error));

    }

    deleteCard(id){
        let buenas = this.state.peliculas.filter(pelicula => pelicula.id !==id)
        this.setState({
            peliculas: buenas, 
            peliculasOriginales: buenas,
        })
    }
    filtrarPorTitulo(tituloAFiltrar){
        console.log(tituloAFiltrar);
        const arrayFiltrado = this.state.peliculasOriginales.filter( elemento => {
                  return  elemento.title.toLowerCase().includes(tituloAFiltrar.toLowerCase())
        })
           
                this.setState({
                    peliculas: arrayFiltrado 
                 })
          
     
 }
      
            cambiarOrientacion(){
                if (this.state.orientacion === "row"){
                    this.setState({
                        orientacion: "column" })
                } else {
                    this.setState({
                        orientacion: "row"
                    })
                }
               
               
            }
    
    render (){
        console.log('renderizando')
        console.log(this.state.peliculas)
        return(
        <React.Fragment>
            <div>
           { this.state.contenido.map( (popular,index) => {
              return <Card key = {index} title = {popular.title} image= {popular.poster_path} description= {popular.overview} estrellas= {popular.vote_average} eliminar={(borrarPeliculas) => this.deleteCard(borrarPeliculas)}></Card> 
            } ) }  
            </div>
            <div>
             <button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom" type="button" onClick={() => this.addMore()} >Cargar más peliculas</button>
             </div>
             </React.Fragment>
        )
    }
 

}




export default Content;