// PACKAGES
import React, { Component } from "react"
import TransitionGroup from "react-addons-transition-group"
import { TweenMax, Power2, Elastic, TimelineLite } from "gsap"
// CSS
import "./body-main.css"
import "./about-main.css"
// IMAGES
import linkedin from "../../images/linkedin_icon.png"
import github from "../../images/github_icon.png"
import email from "../../images/email_icon.png"
// COMPONENTS
import Life from "../content/about/life.js"
import Technology from "../content/about/technology.js"
import Experience from "../content/about/experience.js"
    import ExpItem from "../content/about/exp-item.js"
    import {powerReviewsData, trilogyNWData, devBootcampExpData, cciData} from "../content/about/experience-data.js"
import Education from "../content/about/education.js"
    import EduItem from "../content/about/edu-item.js"
    import {devBootcampEduData, stockholmUniData, msuData} from "../content/about/education-data.js"
import Contact from "../contact.js"
// import SkillItem from "../content/about/skill-item.js"

// info on separating imports and exports: https://stackoverflow.com/questions/29722270/import-modules-from-files-in-directory
// ==================================================================

// let powerReviews = powerReviewsData()
// let devBootcampEdu = devBootcampEduData()
// let stockholmUni = stockholmUniData()
// let msu = msuData()

class AboutMain extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            aboutContainer: "",
            aboutTechContainer: "",
            expContainer: "",
            eduContainer: "",
            containerShow: "block"
        }
    }

    handleCategoryClick(category, showHide) {
        Object.keys(this.state).forEach(v => this.state[v] = '')
        this.setState({
            [category]: "-selected",
        })
        // var x = document.getElementById(showHide)
        // x.classList.toggle("hidden")
        // x.classList.add("active")
        TweenMax.to(".shown", 0, {css: {className: "hidden"}})
        // TweenMax.to("#" + showHide, 1, {css: {className: "shown"}, delay: 1})
        TweenMax.set("#" + showHide, {css: {className: "shown"}, delay: 1.2})
    }

    componentDidUpdate() {
        TweenMax.to('.category-main', 1, {css: {className: 'category-main collapsed'}})
        // TweenMax.to('.category-main-selected', 1, {delay: 1, css: {className: 'expanded'}})
    }

    componentWillEnter (callback) {
        // TweenMax.staggerTo('.matester', 1, {rotation:360, y:100}, 0.5)
        
    }

    componentDidMount() {
        // TweenMax.staggerTo('.matester', 1, {y:100, delay: .5, ease: Power2.easeIn}, 0.2)
        // TweenMax.to('.tester', 1, {css: {maxHeight: 500}})
        TweenMax.staggerFrom('.category-main', 2, {height: 0, transformOrigin: "bottom", delay: 0.5, ease: Power2.easeOut}, 0.2)
    }

    render() {
        return(
            <div className="body-frame">
                <div className="header-background-fix"></div>
                <div className="col-12 content-frame">
                    <div className="body-title">
                        
                        <div className="row the-main-container">
                            <div className={"col category-main" + this.state.aboutContainer} onClick={(category) => this.handleCategoryClick('aboutContainer', 'life')} style={{cursor:'pointer'}}>
                                <h2>a b o u t</h2>
                                <div id="life" className="hidden">
                                    <Life />
                                </div>
                            </div>
                            <div className={"col category-main" + this.state.aboutTechContainer} onClick={(category) => this.handleCategoryClick('aboutTechContainer', 'technology')} style={{cursor:'pointer'}}>
                                <h2>t e c h n o l o g y</h2>
                                <div id="technology" className="hidden">
                                    <Technology />
                                </div>
                            </div>
                            <div className={"col category-main" + this.state.expContainer} onClick={(category) => this.handleCategoryClick('expContainer', 'experience')} style={{cursor:'pointer'}}>
                                <h2>e x p e r i e n c e</h2>
                                <div id="experience" className="hidden">
                                    <Experience />
                                </div>
                            </div>
                            <div className={"col category-main" + this.state.eduContainer} onClick={(category) => this.handleCategoryClick('eduContainer', 'education')} style={{cursor:'pointer'}}>
                                <h2>e d u c a t i o n</h2>
                                <div id="education" className="hidden">
                                    <Education />
                                </div>
                            </div>
                        </div>

                    </div>

                    <TransitionGroup>
                        {/* { this.state.aboutContainer && <Life /> } */}
                        {/* { this.state.aboutTechContainer && <Technology /> } */}
                        {/* { this.state.expContainer && <Experience /> } */}
                        {/* { this.state.eduContainer && <Education /> } */}
                    </TransitionGroup>
                        
                    {/* <ExpItem {...powerReviews} /> */}
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
