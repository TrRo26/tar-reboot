// PACKAGES
import React, { Component } from 'react'
// CSS
import "./posts-grid.css"
// COMPONENTS
import PostCard from "./post-card.js"
// POSTS
import {testPostData} from "./2018/test-post.js"

let testPost = testPostData()

class PostsGrid extends Component {
    render() {
        return(
            <div className="posts-grid-container">
                <h3>Dis Da Grid</h3>
                <div className="gridify">
                    <PostCard {...testPost}/>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </div>
        )
    } 
}

export default PostsGrid
