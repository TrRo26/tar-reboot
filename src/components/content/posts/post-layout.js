// PACKAGES
import React, { Component } from 'react'
// CSS
import "./post-layout.css"

class PostLayout extends Component {

    render() {
        var data = this.props.location.state.data
        return(

            <div className="body-frame">
                <div className="header-background-fix"></div>
                <div className="col-10 content-frame">
                    <div className="body-title">
                        
                        <div className="post-layout-container">
                        
                            <div className="post-main-image-container">
                                <img src={data.postMainImage} alt={"Imagine a beautiful picture here"} className="post-main-image"/>
                            </div>
                            <div className="post-title-data">
                                <h4 className="">{data.postTitle}</h4>
                                <h6 className="">{data.postSubTitle}</h6>
                                <h6 className="">{data.postDate}</h6>
                                <p className="post-text">{data.postText}</p>
                            </div>
                        </div>

                    </div>
                </div> 
            </div>
        )
    } 
}

export default PostLayout