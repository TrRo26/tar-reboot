// PACKAGES
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
// CSS
import "./posts-grid.css"
// COMPONENTS
import PostCard from "./post-card.js"

class PostsGrid extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         showGrid: true,
    //         showPost: false,
    //         currentPost: null,
    //         currentPostPath: null
    //     }
    //     this.handleCardClick = this.handleCardClick.bind(this)
    // }

    // handleCardClick(post, path) {
    //     this.setState(prevState => ({
    //         showGrid: !prevState.showGrid,
    //         showPost: !prevState.showPost,
    //         currentPost: post,
    //         currentPostPath: path
    //     }))
    // }
    
    render() {
        var allPosts = Object.values(this.props.catalog)

        return(
            <div className="posts-grid-container">
                <div className="gridify">

                    <div>{allPosts}</div>
                
                </div>
            </div>
        )
    } 
}

export default PostsGrid
                

// <PostCard
//     // postTitle="The Shadow of the Wind - A Review"
//     postTitle={this.props.catalog["shadow-wind"]}
//     postSubTitle="A few critical thoughts on the novel by Spanish writer Carlos Ruiz Zafón"
//     postDate="November 11, 2015"
//     postLink="shadow-wind"
//     postMainImage={shadowWind}
//     // getPostComponent={this.props.getPostComponent}
// />                  
// <PostCard
//     postTitle="Stockholm Amusement - Restaurants"
//     postSubTitle="Take a break from wandering the mean streets of Sweden's capital and try one of these eight delicious eateries"
//     postDate="October 5, 2015"
//     postPath="stockholm-restaurants"
//     postMainImage={strandvagan}
//     // getPostComponent={() => this.props.handleCardClick(<SARestaurants />)}
// />
// <PostCard 
//     postTitle="Moroccan Ingenuity"
//     postSubTitle="...with a touch of trademark infringement"
//     postDate="May 16, 2015"
//     postPath="moroccan-ingenuity"
//     postMainImage={moroccanPalace}
//     // getPostComponent={() => this.props.handleCardClick(<MoroccanIngenuity />)}
// />