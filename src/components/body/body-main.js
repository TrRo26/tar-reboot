import React, { Component } from 'react'
import "./body-main.css"
import Contact from "../contact.js"
import AboutMe from "../content/about/about-me.js"
import ExpItem from "../content/about/exp-item.js"
import EduItem from "../content/about/edu-item.js"
import SkillItem from "../content/about/skill-item.js"
import linkedin from "../../images/linkedin_icon.png"
import github from "../../images/github_icon.png"
import email from "../../images/email_icon.png"
import {powerReviewsData, trilogyNWData, devBootcampExpData, cciData} from "../content/about/experience-data.js"
import {devBootcampEduData, stockholmUniData, msuData} from "../content/about/education-data.js"

// info on separating imports and exports: https://stackoverflow.com/questions/29722270/import-modules-from-files-in-directory

let powerReviews = powerReviewsData()
let trilogyNW = trilogyNWData()
let devBootcampExp = devBootcampExpData()
let cci = cciData()

let devBootcampEdu = devBootcampEduData()
let stockholmUni = stockholmUniData()
let msu = msuData()

class BodyMain extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isExpMenuExpanded: false,
            isEduMenuExpanded: false
        }
        this.handleExpClick = this.handleExpClick.bind(this);
        this.handleEduClick = this.handleEduClick.bind(this);
    }

    handleExpClick() {
        this.setState(prevState => ({
            isExpMenuExpanded: !prevState.isExpMenuExpanded
        }));
      }
    handleEduClick() {
        this.setState(prevState => ({
            isEduMenuExpanded: !prevState.isEduMenuExpanded
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
                        <h1>Current Employment</h1>
                        <ExpItem {...powerReviews} />
                        <h1 onClick={this.handleExpClick}>Previous Employment</h1>
                        <div className={"expanded-" + this.state.isExpMenuExpanded}>
                            <ExpItem {...trilogyNW} />
                            <ExpItem {...devBootcampExp} />
                            <ExpItem {...cci} />
                        </div>
                    </div>
                    <div className="edu">
                        <h1 onClick={this.handleEduClick}>Education</h1>
                        <div className={"expanded-" + this.state.isEduMenuExpanded}>
                            <EduItem {...devBootcampEdu} />
                            <EduItem {...stockholmUni} />
                            <EduItem {...msu} />
                        </div>
                    </div>
                    <div className="skill">
                        <h1>Skills</h1>
                        <SkillItem skill="JavaScript" dataPercent="%50" />
                        <SkillItem skill="JQuery" dataPercent="%40" />
                        <SkillItem skill="React" dataPercent="%30" />
                        <SkillItem skill="Jasmine" dataPercent="%25" />
                        <SkillItem skill="Ruby" dataPercent="%40" />
                        <SkillItem skill="Rails" dataPercent="%20" />
                        <SkillItem skill="Sinatra" dataPercent="%60" />
                        <SkillItem skill="RSpec" dataPercent="%40" />
                        <SkillItem skill="Swift" dataPercent="%15" />
                        <SkillItem skill="Xcode" dataPercent="%15" />
                        <SkillItem skill="HTML" dataPercent="%80" />
                        <SkillItem skill="CSS" dataPercent="%50" />
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
