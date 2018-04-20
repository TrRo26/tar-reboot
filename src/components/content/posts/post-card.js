// PACKAGES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// CSS
import "./post-card-list.css"

class PostCard extends Component {

    render() {
        var data = this.props.postCardData
        
        return(
            <Link to={"/posts/" + data.postPath}>
                <div className="col-12 card-container">
                    <div className="card-image-container">
                        <img src={data.postMainImage} alt={"Imagine a beautiful picture here"} className="card-image"/>
                    </div>
                    <div className="card-heading-container">
                        <h4 className="card-title">{data.postTitle}</h4>
                        <h6 className="card-sub-title">{data.postSubTitle}</h6>
                        <h6 className="card-date">{data.postDate}</h6>
                    </div>
                </div>
            </Link>
        )
    } 
}

export default PostCard
