import React, {Component} from "react";
 
class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <footer className="padre">
                <p className="text">Made by Juan Huidrobo and Yoel Park</p>
                <img className="tmdb" src={logo} alt='The Movie Data Base' />
            </footer>

        )
    }
}




export default Footer;