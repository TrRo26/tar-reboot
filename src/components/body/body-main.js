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
                    <Contact icon={linkedin} iconLink={'https://www.linkedin.com/in/travisroy'}/>
                    <Contact icon={github} iconLink={'https://github.com/TrRo26'}/>
                    <Contact icon={email} iconLink={'travis.roy26@gmail.com'}/>
                </div>
            </div>
        )
    }
}

export default BodyMain