import React, {Component} from 'react';
import logo from '../img/TMDB.png';
import "./Footer.css";

class Footer extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(

            <footer className="padre">
                <p className="texto">Hecho por Yoel Park y Juan Huidrobo.    </p>
                <img className="tmdb" src={logo} alt='The Movie Data Base'/>
            </footer>
            

        )
    }
}

export default Footer;