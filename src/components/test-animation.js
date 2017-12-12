import React, { Component } from 'react'
import TransitionGroup from 'react-addons-transition-group'
import {TweenMax, Power2, TimelineLite} from "gsap"

class TestAnimation extends React.Component {
    componentWillEnter (callback) {
      const el = this.container;
      TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
    }
  
    componentWillLeave (callback) {
      const el = this.container;
      TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
    }
  
    render () {
      return <div className="box" ref={c => this.container = c}/>;
    }
  } 

export default TestAnimation