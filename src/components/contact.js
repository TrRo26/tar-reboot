import React, { Component } from 'react'
import "./contact.css"

class Contact extends Component {

    render() {
        return (
            <div>
                <img src={this.props.icon} alt={"Get in touch"} className="contact-icon"/>
            </div>
        )
    }
}

export default Contact