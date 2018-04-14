// PACKAGES
import React, { Component } from 'react'
// CSS
import "./2015-12-26.css"
// IMAGES
import chicagoBeer from "./chicago_beer.jpg"

class ChicagoBreweries extends Component {

    postData() {
        return({
            postTitle: "Chicago Breweries",
            postSubTitle: "List of breweries in the immediate Chicago area where you can actually grab a beer",
            postDate: "December 26, 2015",
            postMainImage: chicagoBeer,
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

export default ChicagoBreweries
