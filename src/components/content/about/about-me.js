// PACKAGES
import React, { Component } from 'react'
// CSS
import "./about-me.css"
// IMAGES
import tr_garmisch from "../../../images/photos/tr_garmisch.jpg"
import tr_oregon from "../../../images/photos/tr_oregon.jpg"
import tr_wrigley from "../../../images/photos/tr_wrigley.jpg"

class AboutMe extends Component {

    render() {
        return(
            <div>
                <div className="about-text">
                    <h1 className="section-header">in life:</h1>
                    <p>As a result of several years of intense interest in the field of web development and a strong desire to build and create, I recently attended and graduated from the fully immersive web development program at DevBootcamp in Chicago. Working and studying approximately 60 hours per week, I had the opportunity to build numerous programs utilizing Ruby, Rails, HTML, CSS, JavaScript, JQuery, Sinatra, Xcode, Swift, SQL, and many other development tools.</p>
                    <p>In addition to my current studies at DevBootcamp, I have recently earned a Master's of Science in International and Comparative Education as a result of my intense interest in culture, all things international and, of course, education. I am highly organized and pride myself on the ability to do just about anything and do it well.</p>
                    
                    <div className="image-collection">    
                        <img src={tr_garmisch} className="thumb" data-toggle="modal" data-target=".modal-one" />
                        <img src={tr_oregon} className="thumb" data-toggle="modal" data-target=".modal-two" />
                        <img src={tr_wrigley} className="thumb" data-toggle="modal" data-target=".modal-three" />

                        <div className="modal fade modal-one" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <img src={tr_garmisch} className="open-modal"/>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade modal-two" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <img src={tr_oregon} className="open-modal"/>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade modal-three" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <img src={tr_wrigley} className="open-modal"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <h1 className="section-header">in tech:</h1>
                    <p>My past work with CCI Greenheart in the student exchange industry has provided me with invaluable people skills through day-to-day dealings with a multitude of international and domestic partners, employers and students alike. My formal education has afforded me valuable project management skills, an independent work ethic and an acute understanding of educational design and learning techniques.</p>
                    <p>I have also been lucky enough to have had the chance to spend nearly half a year traveling throughout Western and Eastern Europe, a year and a half working and traveling in Australia and New Zealand, and two years studying and working in Sweden for graduate school. I am absolutely fascinated by different cultures and strongly believe that experiencing the differences those cultures have to offer is essential to a healthy perspective in todays world.</p>

                    <div className="tech-list">
                        <h3 className="tech-list-header">languages / frameworks</h3>
                        <p className="tech">JavaScript | JQuery | React | Jasmine</p>
                        <p className="tech">Ruby | Rails | Sinatra | RSpec</p>
                        <p className="tech">Swift | Xcode | HTML | CSS </p>
                    </div>
                </div>
                
            </div>
        )
    } 
}

export default AboutMe
