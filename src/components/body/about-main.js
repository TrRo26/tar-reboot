// PACKAGES
import React, { Component } from "react"
import { TweenMax, Power2 } from "gsap"
// CSS
import "./body-main.css"
import "./about-main.css"
// IMAGES
import educationIcon from "../../images/icon-congratulation-hat.svg"
import technologyIcon from "../../images/icon-light-bulb.svg"
import lifeIcon from "../../images/icon-ping-pong-racket.svg"
import experienceIcon from "../../images/icon-pick.svg"
import linkedin from "../../images/linkedin_icon.png"
import github from "../../images/github_icon.png"
import email from "../../images/email_icon.png"
// COMPONENTS
import Life from "../content/about/life.js"
import Technology from "../content/about/technology.js"
import Experience from "../content/about/experience.js"
    // import {powerReviewsData, trilogyNWData, devBootcampExpData, cciData} from "../content/about/experience-data.js"
import Education from "../content/about/education.js"
    // import {devBootcampEduData, stockholmUniData, msuData} from "../content/about/education-data.js"
import Contact from "../contact.js"

// info on separating imports and exports: https://stackoverflow.com/questions/29722270/import-modules-from-files-in-directory
// ==================================================================

class AboutMain extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            categoryName: "life",
            component: <Life />
        }
    }

    onMouseOverCat(category, comp) {
        var currentCat = this.state.categoryName
        if(category === null || category !== currentCat) {
            TweenMax.to("#" + currentCat, 3, {y: 0})
            this.setState({
                categoryName: category,
                component: comp
            })
            TweenMax.to("#" + category, 1, {y: -15})
            // TweenMax.fromTo(".category-name-display", 0.5, {css: {height: 0}}, {css: {height: 100}})
        }
    }

    componentDidUpdate() {
    
    }

    componentWillEnter (callback) {

    }

    componentDidMount() {
    
    }

    render() {
        return(
            <div className="body-frame">
                <div className="header-background-fix"></div>
                <div className="content-frame">
                    <div className="body-title">

                        <div className="icons-main">
                            <img src={lifeIcon} 
                                id="life" 
                                onMouseOver={() => this.onMouseOverCat("life", <Life />)} 
                            />
                            <img src={technologyIcon} 
                                id="technology" 
                                onMouseOver={() => this.onMouseOverCat("technology", <Technology />)}
                            />
                            <img src={experienceIcon}
                                id="experience"  
                                onMouseOver={() => this.onMouseOverCat("experience", <Experience />)}
                            />
                            <img src={educationIcon}
                                id="education"
                                onMouseOver={() => this.onMouseOverCat("education", <Education />)}
                            />
                        </div>

                        <div className="category-name-display">
                            {this.state.categoryName}
                        </div>

                        <div className="the-main-container">    
                            <div className={"life category-main" + this.state.lifeContainer}>
                                {this.state.component}
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div className="contact-icons">
                    <Contact icon={linkedin} iconLink={'https://www.linkedin.com/in/travisroy'}/>
                    <Contact icon={github} iconLink={'https://github.com/TrRo26'}/>
                    <Contact icon={email} iconLink={'mailto:travis.roy26@gmail.com'}/>
                </div> */}

            </div>
        )
    }
}

export default AboutMain
