// PACKAGES
import React, { Component, Image } from 'react'
import { Route, Link } from 'react-router-dom'
// CSS
import "./header-main.css"
// IMAGES
import lofoten from "../../images/photos/lofoten.jpg"
// COMPONENTS
import NavLink from "../nav-link.js"

class HeaderMain extends Component {

    render() {
        return(
            <header className="header-frame">
                <div className="overlay"></div>
                <img src={lofoten} alt={"lofoten.jpg"} className="header-img"/>
                <span className="me">TRAVIS A. ROY</span>
                <div className="page-links">
                    <NavLink path="/" name={"about"} />
                    <NavLink path="/projects" name={"projects"} />
                    <NavLink path="/posts" name={"posts"} />
                </div>
            </header>
        )
    }
}

export default HeaderMain
