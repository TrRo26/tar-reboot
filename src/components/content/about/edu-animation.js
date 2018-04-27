// PACKAGES
import React, { Component } from 'react'
import TransitionGroup from 'react-addons-transition-group'
import { TweenMax, Power2, TimelineLite } from "gsap"
// COMPONENTS
import EduItem from "./edu-item.js"
import { msuData, suData, dbcEduData } from "./education-data.js"

let dbc = dbcEduData()
let su = suData()
let msu = msuData()

class EduAnimation extends Component {

    componentWillEnter (callback) {
      // const el = this.container
      // const one = this.containerOne
      // const two = this.containerTwo
      // const three = this.containerThree
    
      TweenMax.staggerTo('.exp-animation', 1, {rotation:360, y:100}, 0.5)
      // TweenMax.fromTo(one, 1.4, {opacity: 0}, {opacity: 1, onComplete: callback});
      // TweenMax.fromTo(two, 1.8, {opacity: 0}, {opacity: 1, onComplete: callback});
    }
  
    componentWillLeave (callback) {
      // const el = this.container;
      // TweenMax.fromTo('.exp-animation', 0.8, {x: 0, opacity: 1}, {x: 300, opacity: 0, onComplete: callback});
    }
  
    render () {
      return ( 
        <div> 
          <div className="exp-animation" >
            <EduItem {...dbc} />
          </div>
          <div className="exp-animation" >
            <EduItem {...su} />
          </div>
          <div className="exp-animation" >
            <EduItem {...msu} />
          </div>
        </div>
      )
    }
  } 

export default EduAnimation


// TweenMax.fromTo(two, 0.4, {x: 300, opacity: 0}, {x: 0, opacity: 1, onComplete: callback});