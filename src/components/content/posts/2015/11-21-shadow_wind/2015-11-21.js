// PACKAGES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// CSS
import "./2015-11-21.css"
// IMAGES
import shadowWind from "./shadow_wind.png"

class ShadowWind extends Component {

    postData() {
        return({
            postTitle: "The Shadow of the Wind - A Review",
            postSubTitle: "A few critical thoughts on the novel by Spanish writer Carlos Ruiz Zafón",
            postDate: "November 11, 2015",
            postMainImage: shadowWind,
            postPath: "",
        })
    }

    render() {
        var data = this.postData()
        return(
            <div>
                <div className="post-layout-container">
                    <div className="post-main-image-container">
                        <img src={data.postMainImage} alt={"Imagine a beautiful picture here"} className="post-main-image"/>
                    </div>
                    <div className="post-title-data">
                        <h4 className="post-title">{data.postTitle}</h4>
                        <h6 className="post-subtitle">{data.postSubTitle}</h6>
                        <h6 className="post-date">{data.postDate}</h6>
                        <div className="post-divider"></div>
                        <div className="post-text-all">
                            <p className="post-text-p1">While entertaining in parts and somewhat eloquently written in others, there still seems to be something profoundly absent from <a href="https://en.wikipedia.org/wiki/Carlos_Ruiz_Zaf%C3%B3n" target="_blank">Carlos Ruiz Zafón</a>’s <a href="https://www.goodreads.com/book/show/1232.The_Shadow_of_the_Wind" target="_blank">The Shadow of the Wind</a>. It’s difficult to discern exactly what that ‘something’ is, but it most likely stems from the flawless nature of the characters who seem to divide themselves a little too stringently between the classically polarized ideals of good and evil. None of the characters exhibit any personality flaws, deal with complex moral situations, or struggle with internal conflict at any point in the novel’s 500 pages. Our heroes always seem to be a victim of circumstance; every obstacle to fall at their feet is the result of some unpleasant external situation presented by the nefarious evildoers, which must ultimately be overcome by way of a flawlessly optimistic disposition. So, while not entirely devoid of human emotion, the novel’s characters are slightly difficult to identify with for any reader who has a moral inclination falling somewhere between the devil incarnate and Christ himself.</p>
                            <p className="post-text-p2">In addition to the lack of character depth, the writing style gives off the distinct impression of an author trying a little too hard. While a variety of passages are fluidly descriptive and even beautiful at times, they still seem to fall short in some ineffable way. Maybe it’s due to a certain level of poetic voice being lost in translation but is probably more likely the result of an author still in search of his style.</p>
                            <p className="post-text-p3">So as a result of the un-relatable, can-do-no-wrong characters and the overeager style of writing, The Shadow of the Wind might be considered a great way to kill time, but falls short as anything more.</p>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }    

}

export default ShadowWind
