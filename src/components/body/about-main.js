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

let powerReviews = powerReviewsData()
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
        }
    }

    handleCategoryClick(category) {
        Object.keys(this.state).forEach(v => this.state[v] = 'collapsed')
        this.setState({
            [category]: 'expanded'        //!this.state[category]
        })
    }

    componentWillEnter (callback) {
        // TweenMax.staggerTo('.matester', 1, {rotation:360, y:100}, 0.5);
    }

    componentDidMount() {
        // TweenMax.staggerTo('.matester', 1, {y:100, delay: .5, ease: Power2.easeIn}, 0.2)
        // TweenMax.to('.tester', 1, {css: {maxHeight: 500}});
        TweenMax.staggerFrom('.category-main', 2, {height: 0, transformOrigin: "bottom", delay: 0.5, ease: Power2.easeOut}, 0.2);
    }

    render() {
        return(
            <div className="body-frame">
                <div className="header-background-fix"></div>
                <div className="col-10 content-frame">
                    <div className="body-title">
                        
                        <div className="row the-main-container">
                            <div className={'col category-main ' + this.state.aboutContainer} onClick={(category) => this.handleCategoryClick('aboutContainer')} style={{cursor:'pointer'}}>
                                <h2>a b o u t</h2>
                            </div>
                            <div className={'col category-main ' + this.state.aboutTechContainer} onClick={(category) => this.handleCategoryClick('aboutTechContainer')} style={{cursor:'pointer'}}>
                                <h2 className="">t e c h n o l o g y</h2>
                            </div>
                            <div className={'col category-main ' + this.state.expContainer} onClick={(category) => this.handleCategoryClick('expContainer')} style={{cursor:'pointer'}}>
                                <h2 className="">e x p e r i e n c e</h2>
                            </div>
                            <div className={'col category-main ' + this.state.eduContainer} onClick={(category) => this.handleCategoryClick('eduContainer')} style={{cursor:'pointer'}}>
                                <h2 className="">e d u c a t i o n</h2>
                            </div>
                        </div>

                    </div>

                    <TransitionGroup>
                        { this.state.aboutContainer && <Life /> }
                        { this.state.aboutTechContainer && <Technology /> }
                        { this.state.expContainer && <Experience /> }
                        { this.state.eduContainer && <Education /> }
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
