import React, { Component } from 'react'
import "./contact.css"

class Contact extends Component {

    render() {
        return(
            <div>
                <a href={this.props.iconLink}>
                    <img src={this.props.icon} alt={"Get in touch"} className="contact-icon"/>
                </a>
            </div>
        )
    }
}

export default Contact