import React, {Component} from 'react';
import "../css/uikit.css";

class Header extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(

            <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <nav class="uk-navbar-container" uk-navbar>
        Juan Huidobro y Yoel Park
    </nav>
</div>
        )
    }
}

export default Header;