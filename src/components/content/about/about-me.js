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

                </div>
            </div>
        )
    } 
}

export default AboutMe
