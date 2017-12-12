import React, { Component, Image } from 'react'
import "./header-main.css"
// import lofoten from "../../images/lofoten.jpg"
import NavLink from "../nav-link.js"

class HeaderMain extends Component {

    render() {
        return(
            <div className="header-frame">
                <span className="me">TRAVIS A. ROY</span>
                <div className="page-links">
                    <NavLink name={"about"} />
                    <NavLink name={"projects"} />
                    <NavLink name={"posts"} />
                </div>
                {/* <img src={lofoten} alt={"lofoten.jpg"} className="header-img"/> */}
            </div>
        )
    }
}

export default HeaderMain
