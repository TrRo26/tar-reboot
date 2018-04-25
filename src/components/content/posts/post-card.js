// PACKAGES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// CSS
import "./post-card-list.css"

class PostCard extends Component {

    displayTags(pt) {
        var pt = pt.sort()
        var tags = []
        for(var i=0; i<pt.length; i++) {
            tags.push(<span className="card-tag">{pt[i]}</span>)
        }
        return tags
    }

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
                        <div className="card-tags">{this.displayTags(data.postTags)}</div>
                        <h6 className="card-date">{data.postDate}</h6>
                    </div>
                </div>
            </Link>
        )
    } 
}

export default PostCard
