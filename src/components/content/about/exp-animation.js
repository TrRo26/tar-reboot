// PACKAGES
import React, { Component } from 'react'
import TransitionGroup from 'react-addons-transition-group'
import {TweenMax, Power2, TimelineLite} from "gsap"
// COMPONENTS
import ExpItem from "./exp-item.js"
import {trilogyNWData, devBootcampExpData, cciData} from "./experience-data.js"

let trilogyNW = trilogyNWData()
let devBootcampExp = devBootcampExpData()
let cci = cciData()

class ExpAnimation extends Component {
    componentWillEnter (callback) {
      const el = this.container;
      TweenMax.fromTo(el, 0.8, {y: 300, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
    }
  
    componentWillLeave (callback) {
      const el = this.container;
      TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: 300, opacity: 0, onComplete: callback});
    }
  
    render () {
      return (  
        <div className="exp-animation" ref={c => this.container = c}>
            <ExpItem {...trilogyNW} />
            <ExpItem {...devBootcampExp} />
            <ExpItem {...cci} />
        </div>
      )
    }
  } 

export default ExpAnimation
