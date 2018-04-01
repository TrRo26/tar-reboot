// PACKAGES
import React, { Component } from 'react'
// CSS
import "./posts-grid.css"
// COMPONENTS
import PostCard from "./post-card.js"
// POSTS
// NEED TO FIND MORE EFFICIENT WAY OF IMPORTING NEW POSTS
import { testPostData } from "./2018/test-post.js"
import { blahPostData } from "./2015/10-5-stockholm_amusement-restaurants/2015-10-5.js"

let testPost = testPostData()
let stockholmAmusementRestaurants = blahPostData()

let postCardData = [testPost, stockholmAmusementRestaurants]

class PostsGrid extends Component {
    
    render() {
        return(
            <div className="posts-grid-container">
                <div className="gridify">
                    { postCardData.map( (stuff) => (<PostCard {...stuff} /> ))}
                </div>
            </div>
        )
    } 
}

export default PostsGrid
