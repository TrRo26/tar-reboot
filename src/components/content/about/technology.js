// PACKAGES
import React, { Component } from 'react'
import { TweenMax } from "gsap"
// CSS
import "./technology.css"
// IMAGES

class Technology extends Component {

    componentDidMount(callback) {    
		TweenMax.fromTo(".para-one-drift", 3, {y: -30, x: -20}, {y: -10, x: 0})
		TweenMax.fromTo(".para-one-drift", 2, {opacity: 0}, {opacity: 1})
		TweenMax.fromTo(".para-two-drift", 3, {y: 30, x: 20}, {y: 10, x: 0})
        TweenMax.fromTo(".para-two-drift", 2, {opacity: 0}, {opacity: 1})
        TweenMax.fromTo(".tech-list", 1, {opacity: 0}, {opacity: 1, delay: 2})
    }

    render() {
        return(
            <div className="inner-container">
                <p className="para-one-drift">As a result of several years of intense interest in the field of web development and a strong desire to build and create, I recently attended and graduated from the fully immersive web development program at DevBootcamp in Chicago. Working and studying approximately 60 hours per week, I had the opportunity to build numerous programs utilizing Ruby, Rails, HTML, CSS, JavaScript, JQuery, Sinatra, Xcode, Swift, SQL, and many other development tools.</p>
                <p className="para-two-drift">I am currently putting these new skills to good use solving problems as a Technical Support Engineer at PowerReviews.</p>
                <div className="tech-list">
                    <h3 className="tech-list-header">languages / frameworks</h3>
                    <p className="tech">JavaScript | React | JQuery | Jasmine</p>
                    <p className="tech">Ruby | Rails | Sinatra | RSpec</p>
                    <p className="tech">Swift | Xcode | HTML | CSS </p>
                </div>
            </div>
        )
    }
}

export default Technology
