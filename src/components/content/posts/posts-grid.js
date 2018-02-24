// PACKAGES
import React, { Component } from 'react'
// CSS
import "./posts-grid.css"
// COMPONENTS
import Post from "./post.js"
// POSTS
import {testPostData} from "./2018/test-post.js"
// import {trilogyNWData, devBootcampExpData, cciData} from "./experience-data.js"

let testPost = testPostData()
// let trilogyNW = trilogyNWData()
// let devBootcampExp = devBootcampExpData()
// let cci = cciData()

class PostsGrid extends Component {
    render() {
        return(
            <div className="posts-grid-container">
                <h3>Dis Da Grid</h3>
                <div className="gridify">
                    <Post {...testPost} />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        )
    } 
}

export default PostsGrid



{/* <ExpItem {...trilogyNW} /> */}
{/* <ExpItem {...devBootcampExp} /> */}
{/* <ExpItem {...cci} /> */}