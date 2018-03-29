// PACKAGES
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
// CSS
import "./body-main.css"
import "./posts-main.css"
// IMAGES
    // import tr_garmisch from "../../../images/photos/tr_garmisch.jpg"
// COMPONENTS
import PostsGrid from "../content/posts/posts-grid.js"

// JUST HERE AS EXAMPLE FROM APP.JS:
// import ProjectsMain from './components/body/projects-main.js'
// import PostsMain from './components/body/posts-main.js'
// import FooterMain from './components/footer/footer-main.js'

class PostsMain extends Component {

    render() {
        return(
            <div className="body-frame">
                <div className="header-background-fix"></div>
                <div className="col-10 content-frame">
                    <div className="body-title">
                        <h2>POST MAIN</h2>
                        <PostsGrid />
                        {/* // JUST HERE AS EXAMPLE FROM APP.JS:
                        <Route path="/" exact component={AboutMain}/>
                        <Route path="/projects" component={ProjectsMain}/>
                        <Route path="/posts" component={PostsMain}/> */}
                    </div>
                </div> 
            </div>
        )
    } 
}

export default PostsMain