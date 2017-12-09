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

class BodyMain extends Component {

    render() {
        return(
            <div className="body-frame">
                {/* <div className="row">
                    <div className="col"> */}

                        <AboutMe />
                        <ExpItem 
                            expCompany="PowerReviews"
                            expLocation="Chicago, IL"
                            expPosition1="Technical Support Engineer"
                            expDate1="July 2017"
                            expContent="Blah Blah Blah"
                        />
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