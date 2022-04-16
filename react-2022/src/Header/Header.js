import React, {Component} from 'react';
import "../css/Uikit.css";

class Header extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(

            <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <nav class="uk-navbar-container" uk-navbar>
        
    </nav>
        </div>
        )
    }
}

export default Header;