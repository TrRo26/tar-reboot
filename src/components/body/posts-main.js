// PACKAGES
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
// CSS
import "./body-main.css"
import "./posts-main.css"
// COMPONENTS
import PostsGrid from "../content/posts/posts-grid.js"
import ShadowWind from '../content/posts/2015/11-21-shadow_wind/2015-11-21';

class PostsMain extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showGrid: true,
            showPost: false,
            currentPost: null,
            currentPostPath: null
        }
        this.handleCardClick = this.handleCardClick.bind(this)
    }

    handleCardClick(post) {
        this.setState(prevState => ({
            showGrid: !prevState.showGrid,
            showPost: !prevState.showPost,
            currentPost: post,
            currentPostPath: "/posts/shadow-wind"
        }))
        console.log("handle card click function was fired!")
        this.props.history.push('/posts/shadow-wind');
    }

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
                            {/* <PostsGrid /> */}


                            <Route exact path="/posts" render={ () => <PostsGrid getPostComponent={this.handleCardClick} /> } />
                            <Route exact path="/posts/:post" component={ShadowWind} />



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
