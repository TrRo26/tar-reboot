// PACKAGES
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
// CSS
    import "./post-card.css"

class PostCard extends Component {

    // WORKING ON LINKING FROM POST CARD TO ACTUAL POST:
    render() {
        return(
            <Link to="/">
            <div className="post-container">
                <div className="post-image-container">
                    <img src={this.props.postMainImage} alt={"Imagine a beautiful picture here"} className="post-image"/>
                </div>
                <div className="post-heading-container">
                    <h4 className="post-title">{this.props.postTitle}</h4>
                    <h6 className="post-sub-title">{this.props.postSubTitle}</h6>
                    <h6 className="post-date">{this.props.postDate}</h6>
                </div>
            </div>
            </Link>
        )
    } 
}

export default PostCard
