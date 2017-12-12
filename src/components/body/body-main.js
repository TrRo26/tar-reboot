// PACKAGES
import React, { Component } from 'react'
import TransitionGroup from 'react-addons-transition-group'
// CSS
import "./body-main.css"
// IMAGES
import linkedin from "../../images/linkedin_icon.png"
import github from "../../images/github_icon.png"
import email from "../../images/email_icon.png"
// COMPONENTS
import Contact from "../contact.js"
import AboutMe from "../content/about/about-me.js"
import ExpItem from "../content/about/exp-item.js"
import EduItem from "../content/about/edu-item.js"
import SkillItem from "../content/about/skill-item.js"
import {powerReviewsData, trilogyNWData, devBootcampExpData, cciData} from "../content/about/experience-data.js"
import {devBootcampEduData, stockholmUniData, msuData} from "../content/about/education-data.js"
import ExpAnimation from "../content/about/exp-animation.js"

// info on separating imports and exports: https://stackoverflow.com/questions/29722270/import-modules-from-files-in-directory
// ==================================================================

let powerReviews = powerReviewsData()
let devBootcampEdu = devBootcampEduData()
let stockholmUni = stockholmUniData()
let msu = msuData()

class BodyMain extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            expMenu: false,
            eduMenu: false,
            skillsMenu: false,
        }
        this.handleExpClick = this.handleExpClick.bind(this);
        this.handleEduClick = this.handleEduClick.bind(this);
        this.handleSkillsClick = this.handleSkillsClick.bind(this);
    }

    handleExpClick = () => {
        this.setState({
            expMenu: !this.state.expMenu
        })
    }

    handleEduClick() {
        this.setState(prevState => ({
            eduMenu: !prevState.eduMenu
        }));
    }

    handleSkillsClick() {
        this.setState(prevState => ({
            skillsMenu: !prevState.skillsMenu
        }));
    }

    render() {
        return(
            <div className="body-frame">
                <div className="col-10 content-frame">
                    <div className="about-me">
                        <AboutMe />
                    </div>
                    <div className="exp">
                        <h1 className="section-header">- what i'm up to now -</h1>
                        <ExpItem {...powerReviews} />
                        <h2 className="section-header">- familiar technologies -</h2>
                        <p className="tech">JavaScript | JQuery | React | Jasmine</p>
                        <p className="tech">Ruby | Rails | Sinatra | RSpec</p>
                        <p className="tech">Swift | Xcode | HTML | CSS </p>

                        <h2 className="section-header" onClick={this.handleExpClick} style={{cursor:'pointer'}}>Previous Experience</h2>
                        <TransitionGroup>
                            { this.state.expMenu && <ExpAnimation />}
                        </TransitionGroup>
                    </div>
                    <div className="edu">
                        <h2 className="section-header" onClick={this.handleEduClick} style={{cursor:'pointer'}}>Education</h2>
                        <div className={"expanded-" + this.state.eduMenu}>
                            <EduItem {...devBootcampEdu} />
                            <EduItem {...stockholmUni} />
                            <EduItem {...msu} />
                        </div>
                    </div>
                </div>  
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


// ATTEMPTS TO COMBINE EVENT HANDLERS

    // handleClick(menuName) {
    //     return () => {
    //         this.setState({
    //             menuName: true
    //              // this.state.menuName === true ? false : true
    //         });
    //     }
    // }

    // <div>
    //     <div onClick={() => this.handleClick('div1')} className= { this.state.activeDiv === 'div1' ? "positive active" : "positive"}>Div1</div>
    //     <div onClick={() => this.handleClick('div2')} className= { this.state.activeDiv === 'div2' ? "neutral active" : "neutral"}>Div2</div>
    //     <div onClick={() => this.handleClick('div3')} className= { this.state.activeDiv === 'div3' ? "negative active" : "negative"}>Div3</div>
    // </div>
