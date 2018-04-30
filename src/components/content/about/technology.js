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
        TweenMax.fromTo(".tech-list", 1, {opacity: 0}, {opacity: 1, delay: 3})
    }

    render() {
        return(
            <div className="inner-container">
                <p className="para-one-drift">My past work with CCI Greenheart in the student exchange industry has provided me with invaluable people skills through day-to-day dealings with a multitude of international and domestic partners, employers and students alike. My formal education has afforded me valuable project management skills, an independent work ethic and an acute understanding of educational design and learning techniques.</p>
                <p className="para-two-drift">I have also been lucky enough to have had the chance to spend nearly half a year traveling throughout Western and Eastern Europe, a year and a half working and traveling in Australia and New Zealand, and two years studying and working in Sweden for graduate school. I am absolutely fascinated by different cultures and strongly believe that experiencing the differences those cultures have to offer is essential to a healthy perspective in todays world.</p>

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
