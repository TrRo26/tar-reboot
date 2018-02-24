// PACKAGES
import React, { Component } from 'react'
// CSS
import "./posts-grid.css"
// IMAGES
    // import tr_garmisch from "../../../images/photos/tr_garmisch.jpg"
// COMPONENTS
import Post from "./post.js"

class PostsGrid extends Component {

    render() {
        return(
            <div className="posts-grid-container">
                <h3>Dis Da Grid</h3>
                <div className="gridify">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        )
    } 
}

export default PostsGrid