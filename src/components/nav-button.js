import React, { Component } from 'react'
// import "./header-main.css"
// import lofoten from "./lofoten.jpg"

class NavButton extends Component {

    render() {
        return (
            <div className="#">
                <span>{this.props.name}</span>
            </div>
        )
    }
}

export default NavButton