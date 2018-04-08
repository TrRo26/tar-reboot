// PACKAGES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// CSS
import "./post-card.css"

class PostCard extends Component {

    render() {
        return(
            <div className="post-container">
                <div className="post-image-container">
                    <img src={this.props.postMainImage} alt={"Imagine a beautiful picture here"} className="post-image"/>
                </div>
                <div className="post-heading-container">
                    {/* <Link to={{pathname: this.props.postPath, state: {data: this.props}}} className="post-title">{this.props.postTitle}</Link> */}
                    <h3 className="post-title" onClick={this.props.getPostComponent}>{this.props.postTitle}</h3>
                    <h6 className="post-sub-title">{this.props.postSubTitle}</h6>
                    <h6 className="post-date">{this.props.postDate}</h6>
                </div>
            </div>
        )
    } 
}

export default PostCard
