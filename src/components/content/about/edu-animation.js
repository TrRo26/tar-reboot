// PACKAGES
import React, { Component } from 'react'
import TransitionGroup from 'react-addons-transition-group'
import {TweenMax, Power2, TimelineLite} from "gsap"
// COMPONENTS
import EduItem from "./edu-item.js"
import {msuData, suData, dbcEduData} from "./education-data.js"

let dbc = dbcEduData()
let su = suData()
let msu = msuData()

class EduAnimation extends Component {
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
            <EduItem {...dbc} />
            <EduItem {...su} />
            <EduItem {...msu} />
        </div>
      )
    }
  } 

export default EduAnimation
