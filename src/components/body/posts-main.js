// PACKAGES
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
// CSS
import "./body-main.css"
import "./posts-main.css"
// COMPONENTS
import { PostsGrid, Post } from "../content/posts/posts-grid.js"
// POSTS
import ShadowWind from '../content/posts/2015/11-21-shadow_wind/2015-11-21'
import SARestaurants from "../content/posts/2015/10-05-sa_restaurants/2015-10-05.js"
import MoroccanIngenuity from "../content/posts/2015/05-16-moroccan_ingenuity/2015-05-16.js"

const componentsCatalog = {
    "shadow-wind": <ShadowWind />,
    "stockholm-restaurants": <SARestaurants />,
    "moroccan-ingenuity": <MoroccanIngenuity />,
}

class PostsMain extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentPost: null,
        }
        // this.handleCardClick = this.handleCardClick.bind(this)
    }

    // setPostCard() {
    //     this.setState(
    //         () => {
    //             showCard: true
    //         }
    //     )
    // }

    // setPost() {
    //     this.setState({
    //         showCard: false
    //     })
    // }

    // handleCardClick(post) {
    //     this.setState(
    //         prevState => ({
    //             currentPost: post,
    //         })
    //     )
    //     this.props.history.push("/posts/shadow-wind")
    // }

    render() {
        const url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)

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
                            <Route exact path="/posts" render={ () => <PostsGrid catalog={componentsCatalog} /> } />
                            <Route exact path="/posts/:post" render={ () => <Post catalog={componentsCatalog} id={url} /> } />
                        </div>
                    </div>
            </div>
        )
    } 
}

export default PostsMain

// getPostComponent={this.handleCardClick}
// component={this.state.currentPost}


// BLOG SITE EXAMPLES:

// https://iso.500px.com/  <--- this one!!
// https://design-milk.com/
// https://pando.com/archives/
