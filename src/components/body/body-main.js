import React, { Component } from 'react'
import "./body-main.css"
import Contact from "../contact.js"
import linkedin from "../../images/linkedin_icon.png"
import github from "../../images/github_icon.png"
import email from "../../images/email_icon.png"

class BodyMain extends Component {

    render() {
        return (
            <div className="body-frame">
                <div className="contact-icons">
                    <Contact icon={linkedin} />
                    <Contact icon={github} />
                    <Contact icon={email} />
                </div>
            </div>
        )
    }
}

export default BodyMain