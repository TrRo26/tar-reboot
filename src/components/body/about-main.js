// PACKAGES
import React, { Component } from 'react'
import TransitionGroup from 'react-addons-transition-group'
import { TweenMax, Power2, Elastic, TimelineLite } from "gsap"
// CSS
import "./body-main.css"
import "./about-main.css"
// IMAGES
import linkedin from "../../images/linkedin_icon.png"
import github from "../../images/github_icon.png"
import email from "../../images/email_icon.png"
// COMPONENTS
import Contact from "../contact.js"
import AboutMe from "../content/about/about-me.js"
import AboutMeTech from "../content/about/about-me-tech.js"
import ExpItem from "../content/about/exp-item.js"
import EduItem from "../content/about/edu-item.js"
    // import SkillItem from "../content/about/skill-item.js"
import {powerReviewsData, trilogyNWData, devBootcampExpData, cciData} from "../content/about/experience-data.js"
import {devBootcampEduData, stockholmUniData, msuData} from "../content/about/education-data.js"
import ExpAnimation from "../content/about/exp-animation.js"
import EduAnimation from "../content/about/edu-animation.js"

// info on separating imports and exports: https://stackoverflow.com/questions/29722270/import-modules-from-files-in-directory
// ==================================================================

let powerReviews = powerReviewsData()
// let devBootcampEdu = devBootcampEduData()
// let stockholmUni = stockholmUniData()
// let msu = msuData()

class AboutMain extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            aboutMeContainer: true,
            aboutMeTechContainer: false,
            expContainer: false,
            eduContainer: false,
        }
    }

    handleCategoryClick(category) {
        Object.keys(this.state).forEach(v => this.state[v] = false)
        this.setState({
            [category]: !this.state[category]
        })
    }

    componentWillEnter (callback) {
        // TweenMax.staggerTo('.matester', 1, {rotation:360, y:100}, 0.5);
    }

    componentDidMount() {
        TweenMax.staggerTo('.matester', 1, {y:100, delay: .5, ease: Power2.easeIn}, 0.2)
        // TweenMax.to('.tester', 1, {css: {maxHeight: 500}});
    }

    render() {
        return(
            <div className="body-frame">
                <div className="header-background-fix"></div>
                <div className="col-10 content-frame">
                    <div className="body-title">
                        
                    {/* <TransitionGroup> */}
                        <div className="row">
                            <div className="col matester">
                                <h2 className="section-header sh-small" onClick={(category) => this.handleCategoryClick('aboutMeContainer')} style={{cursor:'pointer'}}>About Me +</h2>
                            </div>
                            <div className="col matester">
                                <h2 className="section-header sh-small" onClick={(category) => this.handleCategoryClick('aboutMeTechContainer')} style={{cursor:'pointer'}}>About Me Tech +</h2>
                            </div>
                            <div className="col matester">
                                <h2 className="section-header sh-small" onClick={(category) => this.handleCategoryClick('expContainer')} style={{cursor:'pointer'}}>previous experience +</h2>
                            </div>
                            <div className="col matester">
                                <h2 className="section-header sh-small" onClick={(category) => this.handleCategoryClick('eduContainer')} style={{cursor:'pointer'}}>education +</h2>
                            </div>
                        </div>
                    {/* </TransitionGroup> */}

                    </div>

                    <TransitionGroup>
                        { this.state.aboutMeContainer && <AboutMe /> }
                        { this.state.aboutMeTechContainer && <AboutMeTech /> }
                        { this.state.expContainer && <ExpAnimation /> }
                        { this.state.eduContainer && <EduAnimation /> }
                    </TransitionGroup>
                        
                        
                    {/* <ExpItem {...powerReviews} /> */}
                        
                        
                      
                </div>

                <div className="contact-icons">
                    <Contact icon={linkedin} iconLink={'https://www.linkedin.com/in/travisroy'}/>
                    <Contact icon={github} iconLink={'https://github.com/TrRo26'}/>
                    <Contact icon={email} iconLink={'mailto:travis.roy26@gmail.com'}/>
                </div>
            </div>
        )
    }
}

export default AboutMain


// ATTEMPTS TO COMBINE EVENT HANDLERS

    // handleClick(ContainerName) {
    //     return () => {
    //         this.setState({
    //             ContainerName: true
    //              // this.state.ContainerName === true ? false : true
    //         });
    //     }
    // }

    // <div>
    //     <div onClick={() => this.handleClick('div1')} className= { this.state.activeDiv === 'div1' ? "positive active" : "positive"}>Div1</div>
    //     <div onClick={() => this.handleClick('div2')} className= { this.state.activeDiv === 'div2' ? "neutral active" : "neutral"}>Div2</div>
    //     <div onClick={() => this.handleClick('div3')} className= { this.state.activeDiv === 'div3' ? "negative active" : "negative"}>Div3</div>
    // </div>
