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
import {powerReviewsData, cciData} from "../content/about/experience-data.js"

// info on separating imports and exports: https://stackoverflow.com/questions/29722270/import-modules-from-files-in-directory

let powerReviews = powerReviewsData()
let cci = cciData()

class BodyMain extends Component {

    render() {
        return(
            <div className="body-frame">
                {/* <div className="row">
                    <div className="col"> */}

                        <AboutMe />
                        <ExpItem {...powerReviews} />
                        <ExpItem {...cci} />

                        <EduItem 
                            eduInstitute="DevBootcamp"
                            eduLocation="Chicago, IL"
                            eduDegree="Coding School Graduate in Full Stack Web Development"
                            eduDate="June 2016 to December 2016"
                            EduDepartment=""
                        />
                        <SkillItem
                            skill="JavaScript"
                            dataPercent="%1000"
                        />
                        <div className="contact-icons">
                            <Contact icon={linkedin} iconLink={'https://www.linkedin.com/in/travisroy'}/>
                            <Contact icon={github} iconLink={'https://github.com/TrRo26'}/>
                            <Contact icon={email} iconLink={'travis.roy26@gmail.com'}/>
                        </div>

                    {/* </div>
                </div> */}
            </div>
        )
    }
}

export default BodyMain