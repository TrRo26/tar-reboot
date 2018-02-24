// PACKAGES
import React, { Component } from 'react'
// CSS
import "./body-main.css"
import "./posts-main.css"
// IMAGES
    // import tr_garmisch from "../../../images/photos/tr_garmisch.jpg"
// COMPONENTS
import PostsGrid from "../content/posts/posts-grid.js"

class PostsMain extends Component {

    render() {
        return(
            <div className="body-frame">
                <div className="header-background-fix"></div>
                <div className="col-10 content-frame">
                    <div className="body-title">
                        <h2>POST MAIN</h2>
                        <PostsGrid /> 
                    </div>
                </div> 
            </div>
        )
    } 
}

export default PostsMain