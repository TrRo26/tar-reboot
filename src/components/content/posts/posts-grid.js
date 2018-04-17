// PACKAGES
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import { browserHistory } from 'history'
// CSS
import "./posts-grid.css"
// COMPONENTS
import PostCard from "./post-card.js"
// POSTS
import MoroccanIngenuity from "./2015/05-16-moroccan_ingenuity/2015-05-16.js"
    import moroccanPalace from "./2015/05-16-moroccan_ingenuity/moroccan_palace.jpg"
import SARestaurants from "./2015/10-05-sa_restaurants/2015-10-05.js"
    import strandvagan from "./2015/10-05-sa_restaurants/strandvagan.jpg"
import ShadowWind from "./2015/11-21-shadow_wind/2015-11-21.js"
    import shadowWind from "./2015/11-21-shadow_wind/shadow_wind_crop.png"
import ChicagoBreweries from "./2015/12-26-chicago_breweries/2015-12-26.js"
    import chicagoBeer from "./2015/12-26-chicago_breweries/chicago_beer.jpg"

let posts = [] // REFACTOR BELOW POSTCARDs TO DYNAMICALLY RENDER??

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
        // if (this.state.showGrid === true) {
            return(
                <div className="posts-grid-container">
                    <div className="gridify">
                        <PostCard
                            postTitle="The Shadow of the Wind - A Review"
                            postSubTitle="A few critical thoughts on the novel by Spanish writer Carlos Ruiz Zafón"
                            postDate="November 11, 2015"
                            postMainImage={shadowWind}
                            getPostComponent={this.props.getPostComponent}
                        />                    
                        <PostCard
                            postTitle="Stockholm Amusement - Restaurants"
                            postSubTitle="Take a break from wandering the mean streets of Sweden's capital and try one of these eight delicious eateries"
                            postDate="October 5, 2015"
                            postMainImage={strandvagan}
                            getPostComponent={() => this.props.handleCardClick(<SARestaurants />)}
                        />
                        <PostCard 
                            postTitle="Moroccan Ingenuity"
                            postSubTitle="...with a touch of trademark infringement"
                            postDate="May 16, 2015"
                            postMainImage={moroccanPalace}
                            getPostComponent={() => this.props.handleCardClick(<MoroccanIngenuity />)}
                        />
                    </div>
                </div>
            )
        } 
        // else if (this.state.showPost === true) {
        //     console.log("POST: " + this.state.currentPost)
        //     console.log("POST PATH: " + this.state.currentPostPath)
            
        //     return(
        //         <div>

        //             <div>MOTHER FUCKING GODDAM HELL</div>

        //         </div>
        //     )
      
        // }
    // } 
}

export default PostsGrid


{/* <Link to="/posts/shadow-wind">CLICK ME</Link> */}

{/* {this.state.currentPost} */}

// this.props.history.push('/posts/shadow-wind');
{/* <Route exact path="/posts/:post"component={ShadowWind} />
<Redirect to="/posts/shadow-wind" />
<Link to={{"/users"}} /> */}




// The easiest way to get it done:

// this.props.history.push("/new/url")

// Note:

// You may want to pass the history prop from parent 
// component down to the component you want to invoke 
// the action if its not available.