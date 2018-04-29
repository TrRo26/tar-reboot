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
    
    render () {
      return (  
        <div className="inner-container">
            <ExperienceItem {...powerReviews} />
            <span className="plain-divider"></span>
            <ExperienceItem {...trilogyNW} />
            <span className="plain-divider"></span>
            <ExperienceItem {...devBootcampExp} />
            <span className="plain-divider"></span>
            <ExperienceItem {...cci} />
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