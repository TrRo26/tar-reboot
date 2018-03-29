// PACKAGES
import React, { Component } from 'react'
// CSS
    import "./post-layout.css"

class PostLayout extends Component {

    render() {
        return(
            <div className="">
                <div className="post-main-image-container">
                    <img src={this.props.postMainImage} alt={"Imagine a beautiful picture here"} className="post-main-image"/>
                </div>
                <div className="post-title-data">
                    <h4 className="">{this.props.postTitle}</h4>
                    <h6 className="">{this.props.postSubTitle}</h6>
                    <h6 className="">{this.props.postDate}</h6>
                    <p className="post-text">{this.props.postText}</p>
                </div>
            </div>
        )
    } 
}

export default PostLayout