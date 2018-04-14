// PACKAGES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// CSS
import "./post-card-list.css"

class PostCard extends Component {

    render() {
        return(
            <div className="col-12 card-container" onClick={this.props.getPostComponent}>
                <div className="card-image-container">
                        <img src={this.props.postMainImage} alt={"Imagine a beautiful picture here"} className="card-image"/>
                </div>
                <div className="card-heading-container">
                    {/* <Link to={{pathname: this.props.postPath, state: {data: this.props}}} className="post-title">{this.props.postTitle}</Link> */}
                    <h4 className="card-title">{this.props.postTitle}</h4>
                    <h6 className="card-sub-title">{this.props.postSubTitle}</h6>
                    <h6 className="card-date">{this.props.postDate}</h6>
                </div>
            </div>
        )
    } 
}

export default PostCard
