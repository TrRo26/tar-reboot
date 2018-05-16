// PACKAGES
import React, { Component } from 'react'
// CSS
import "./posts-grid.css"
// COMPONENTS

export class PostsGrid extends Component {

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

    // filterPostsByTag(selectedTag) {
    //     var posts = this.props.catalog
    //     var filteredPosts = []
    //     for (var post in posts) {
    //         console.log("posts: " + JSON.stringify(posts))
    //         console.log("post: " + post)
    //         var postInfo = posts[post]
    //         console.log("THIS HERE: " + JSON.stringify(postInfo))
    //         if (postInfo.postTags === selectedTag) {
    //             filteredPosts.push(post)
    //         }
    //     }
    //     console.log(filteredPosts)
    //     // return filteredPosts
    // }

    // componentDidMount() {
    //     this.filterPostsByTag("travel")
    // }
    
    render() {
        var allPosts = Object.values(this.props.catalog)
        // this.filterPostsByTag("travel")

        return(
            <div className="posts-grid-container">
                <div className="gridify">

                    <div>{allPosts}</div>
                
                </div>
            </div>
        )
    } 
}

export class Post extends Component {

    render() {
        var post = this.props.catalog[this.props.id]
        
        return(
           <div>{post}</div>
        )
    }
}

// export default PostsGrid
                

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