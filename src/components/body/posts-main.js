// PACKAGES
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
// CSS
import "./body-main.css"
import "./posts-main.css"
// COMPONENTS
import PostsGrid from "../content/posts/posts-grid.js"

class PostsMain extends Component {

    render() {
        return(
            <div className="body-frame">
                <div className="header-background-fix"></div>
                <div className="col-10 content-frame">
                    <div className="body-title">
                        <PostsGrid />
                    </div>
                </div>
            </div>
        )
    } 
}

export default PostsMain
