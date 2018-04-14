// PACKAGES
import React, { Component } from 'react'
// CSS
import "./2015-11-21.css"
// IMAGES
import shadowWind from "./shadow_wind.png"

class ShadowWind extends Component {

    postData() {
        return({
            postTitle: "The Shadow of the Wind - A Review",
            postSubTitle: "Some thoughts on the novel by Spanish writer Carlos Ruiz Zafón",
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
                        <h4 className="">{data.postTitle}</h4>
                        <h6 className="">{data.postSubTitle}</h6>
                        <h6 className="">{data.postDate}</h6>
                        <p className="post-text">{data.postText}</p>
                    </div>    
                </div>
            </div>
        )
    }    

}

export default ShadowWind

// TEXT: While entertaining in parts and somewhat eloquently written in others, there still seems to be something profoundly absent from Carlos Ruiz Zafón’s A Shadow of the Wind. It’s difficult to discern exactly what that ‘something’ is, but it most likely stems from the flawless nature of the characters who seem to divide themselves a little too stringently between the classically polarized ideals of good and evil. None of the characters exhibit any personality flaws, deal with complex moral situations, or struggle with internal conflict at any point in the novel’s 500 pages. Our heroes always seem to be a victim of circumstance; every obstacle to fall at their feet is the result of some unpleasant external situation presented by the nefarious evildoers, which must ultimately be overcome by way of a flawlessly optimistic disposition. So, while not entirely devoid of human emotion, the novel’s characters are slightly difficult to identify with for any reader who has a moral inclination falling somewhere between the devil incarnate and Christ himself.
        // In addition to the lack of character depth, the writing style gives off the distinct impression of an author trying a little to hard. While a variety of passages are fluidly descriptive and almost beautiful at times, they still seem to fall short in some ineffable way. Maybe it’s due to a certain level of poetic voice being lost in translation but is probably more likely the result of an author still in search of his style.
        // So as a result of the un-relatable, can-do-no-wrong characters and the overeager style of writing, A Shadow of the Wind might be considered a great way to kill time, but falls short as anything more.
