import React, { Component } from 'react'
import "./body-main.css"
import Contact from "../contact.js"
import linkedin from "../../images/linkedin_icon.png"
import github from "../../images/github_icon.png"
// import email from "./lofoten.jpg"

class BodyMain extends Component {

    render() {
        return (
            <div className="body-frame">
                <div>
                    <Contact icon={linkedin} />
                    <Contact icon={github}/>
                    <Contact />
                </div>
            </div>
        )
    }
}

export default BodyMain