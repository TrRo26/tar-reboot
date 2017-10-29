import React, { Component } from 'react'
// import "./header-main.css"
// import lofoten from "./lofoten.jpg"

class Contact extends Component {

    render() {
        return (
            <div>
                <img src={this.props.icon} alt={"LinkedIn"} className="#"/>
            </div>
        )
    }
}

export default Contact