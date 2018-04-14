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
                    <div className="right-sidebar">
                        <p className="archives">archives:</p>
                        <p>2015</p>
                        <p>2018</p>
                    </div>
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

// BLOG SITE EXAMPLES:

// https://iso.500px.com/  <--- this one!!
// https://design-milk.com/
// https://pando.com/archives/

// NOTES:
// Example of slow zoom on a post picture: https://www.webdesignerdepot.com/
