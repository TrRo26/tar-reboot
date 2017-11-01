import React, { Component, Image } from 'react'
import "./header-main.css"
import lofoten from "../../images/lofoten.jpg"
import NavButton from "../nav-button.js"

class HeaderMain extends Component {

    render() {
        return (
            <div className="header-frame">
                <span>TRAVIS A. ROY</span>
                <NavButton name={"about"} />
                <NavButton name={"projects"} />
                <NavButton name={"posts"} />
                <img src={lofoten} alt={"lofoten.jpg"} className="header-img"/>
            </div>
        )
    }
}

export default HeaderMain
