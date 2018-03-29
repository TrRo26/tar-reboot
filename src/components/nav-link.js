// PACKAGES
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
// CSS
import "./nav-link.css"

class NavLink extends Component {

    render() {
        return(
            <div className="nav-link">
                <span><Link to={this.props.path}>{this.props.name}</Link></span>
            </div>
        )
    }
}

export default NavLink