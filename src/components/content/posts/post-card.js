// PACKAGES
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
// CSS
import "./post-card.css"
// COMPONENTS
import PostLayout from "./post-layout.js"
import { testPostData } from "./2018/test-post.js"

let testPost = testPostData()

function BLAH () {
    return (
        <h1>FOR FUCKS SAKE!!</h1>
    )
}

class PostCard extends Component {

    // WORKING ON LINKING FROM POST CARD TO ACTUAL POST:
    render() {
        return(
            <div className="post-container">
                <div className="post-image-container">
                    <img src={this.props.postMainImage} alt={"Imagine a beautiful picture here"} className="post-image"/>
                </div>
                <div className="post-heading-container">
                    <Link to="/posts/test-post" className="post-title">{this.props.postTitle}</Link>
                    <h6 className="post-sub-title">{this.props.postSubTitle}</h6>
                    <h6 className="post-date">{this.props.postDate}</h6>
                </div>
            </div>
        )
    } 
}

export default PostCard

// {testPost.postPath}
// {...testPost} 