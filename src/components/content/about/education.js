// PACKAGES
import React, { Component } from 'react'
// import TransitionGroup from 'react-addons-transition-group'
import { TweenMax, Power3 } from "gsap"
// CSS
import "./education.css"
// COMPONENTS
import EducationItem from "./education-item.js"
import { msuData, suData, dbcEduData } from "./education-data.js"

let dbc = dbcEduData()
let su = suData()
let msu = msuData()

class Education extends Component {

    componentDidMount(callback) {    
		TweenMax.fromTo(".dbc-drift", 5, {y: -20}, {y: 0})
		TweenMax.fromTo(".dbc-drift", 2, {opacity: 0}, {opacity: 1})
		TweenMax.fromTo(".su-drift", 5, {y: 5}, {y: 0})
		TweenMax.fromTo(".su-drift", 2, {opacity: 0}, {opacity: 1})
		TweenMax.fromTo(".msu-drift", 5, {y: 20}, {y: 0})
		TweenMax.fromTo(".msu-drift", 2, {opacity: 0}, {opacity: 1})
    }
  
    componentWillLeave(callback) {
	
    }
  
    render () {
      	return ( 
			<div className="inner-container"> 
				<div className="edu-animation dbc-drift">
					<EducationItem {...dbc} />
				</div>
    		    {/* <span className="plain-divider"></span> */}
				<div className="edu-animation su-drift">
					<EducationItem {...su} />
				</div>
        		{/* <span className="plain-divider"></span> */}
				<div className="edu-animation msu-drift">
					<EducationItem {...msu} />
				</div>
			</div>
		)
	}
} 

export default Education
