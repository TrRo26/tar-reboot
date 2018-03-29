// PACKAGES
import React, { Component } from 'react'
// CSS
    import "./post-layout.css"

class PostLayout extends Component {

    render() {
        return(
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
        )
    } 
}

export default PostLayout