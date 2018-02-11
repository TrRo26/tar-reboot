import React, { Component, Image } from 'react'
import "./header-main.css"
import lofoten from "../../images/photos/lofoten.jpg"
import NavLink from "../nav-link.js"

class HeaderMain extends Component {

    render() {
        return(
            <header className="header-frame">
                <div className="overlay"></div>
                <img src={lofoten} alt={"lofoten.jpg"} className="header-img"/>
                <span className="me">TRAVIS A. ROY</span>
                <div className="page-links">
                    <NavLink name={"about"} />
                    <NavLink name={"projects"} />
                    <NavLink name={"posts"} />
                </div>
            </header>
        )
    }
}

export default HeaderMain
