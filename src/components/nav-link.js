import React, { Component } from 'react'
import "./nav-link.css"

class NavButton extends Component {

    render() {
        return(
            <div className="nav-link">
                <span><a href="#">{this.props.name}</a></span>
            </div>
        )
    }
}

export default NavButton