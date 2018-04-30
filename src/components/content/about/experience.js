// PACKAGES
import React, { Component } from 'react'
import TransitionGroup from 'react-addons-transition-group'
import { TweenMax, Power2, TimelineLite } from "gsap"
//CSS
import "./experience.css"
// COMPONENTS
import ExperienceItem from "./experience-item.js"
import { powerReviewsData, trilogyNWData, devBootcampExpData, cciData } from "./experience-data.js"

let powerReviews = powerReviewsData()
let trilogyNW = trilogyNWData()
let devBootcampExp = devBootcampExpData()
let cci = cciData()

class Experience extends Component {

	componentDidMount(callback) {    
		// TweenMax.fromTo(".dbc-drift", 5, {y: -20}, {y: 0})
		TweenMax.fromTo(".pr-drift", 2, {opacity: 0}, {opacity: 1})
		// TweenMax.fromTo(".su-drift", 5, {y: 5}, {y: 0})
		TweenMax.fromTo(".trilogy-drift", 2, {opacity: 0}, {opacity: 1})
		// TweenMax.fromTo(".msu-drift", 5, {y: 20}, {y: 0})
		TweenMax.fromTo(".dev-drift", 2, {opacity: 0}, {opacity: 1})
		TweenMax.fromTo(".cci-drift", 2, {opacity: 0}, {opacity: 1})
	}
    
    render () {
		return (  
			<div className="inner-container">
				<div className="pr-drift">
					<ExperienceItem {...powerReviews} />
				</div>
				{/* <span className="plain-divider"></span> */}
				<div className="trilogy-drift">
					<ExperienceItem {...trilogyNW} />
				</div>
				{/* <span className="plain-divider"></span> */}
				<div className="dev-drift">
					<ExperienceItem {...devBootcampExp} />
				</div>
				{/* <span className="plain-divider"></span> */}
				<div className="cci-drift">
					<ExperienceItem {...cci} />
				</div>
			</div>
		)
    }
} 

export default Experience


// componentWillEnter (callback) {
//   const el = this.container;
//   TweenMax.fromTo(el, 0.8, {y: 300, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
// }

// componentWillLeave (callback) {
//   const el = this.container;
//   TweenMax.fromTo(el, 0.5, {y: 0, opacity: 1}, {y: 300, opacity: 0, onComplete: callback});
// }

// <div className="exp-animation" ref={c => this.container = c}>