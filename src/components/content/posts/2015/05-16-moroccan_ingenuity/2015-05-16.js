// PACKAGES
import React, { Component } from 'react'
// CSS
import "./2015-05-16.css"
// IMAGES
import moroccanPalace from "./moroccan_palace.jpg"
import moroccanPizza from "./not_pizza_hut.png"
// COMPONENTS
import PostCard from "../../post-card.js"

class MoroccanIngenuity extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showCard: true,
        }
    }

    postData() {
        return({
            postTitle: "Moroccan Ingenuity",
            postSubTitle: "...with a touch of trademark infringement",
            postDate: "May 16, 2015",
            postMainImage: moroccanPalace,
            postPath: "moroccan-ingenuity",
        })
    }

    render() {
        var data = this.postData()
        const endUrl = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
        
        if (endUrl != data.postPath) {
            return(
                <PostCard postCardData={this.postData()} />   
            )
        } else if (endUrl === data.postPath) {
            return(
                <div>
                    <div className="post-layout-container">
                        <div className="post-main-image-container">
                            <img src={data.postMainImage} alt={"Imagine a beautiful picture here"} className="post-main-image"/>
                        </div>
                        <div className="post-title-data">
                            <h4 className="post-title">{data.postTitle}</h4>
                            <h6 className="post-subtitle">{data.postSubTitle}</h6>
                            <h6 className="post-date">{data.postDate}</h6>
                            <div className="post-divider"></div>
                            <div className="post-text-all">
                                <p className="post-text-p1">Morocco is a beautiful country, worlds away from the US and filled with history and charm. Prices are cheap, the medinas are stunning and the food is delicious. In a culture that expresses appreciation for the tangible through a great deal of incredible architecture, gorgeous and intricate <a href="https://en.wikipedia.org/wiki/Zellige" target="_blank">zellige</a> tiling and quality hand crafted works of art, there still exists a refreshing lack of materialism in the air – a utilitarian approach to life coexists seamlessly alongside a focus on beauty and perfection.</p>
                                <p className="post-text-p2">While many cultures could probably make similar claims, where Morocco differs is its noticeable lack of something resembling a middle ground. Exuberantly tiled riads sit next to cafés donning mismatched chairs looking as though they could have been scavenged from a nearby garbage dump. There’s a very palpable sense that one of two roads is decidedly taken – one of care, attention to detail and attentiveness or one consisting of a somewhat lethargic indifference focused purely on functionality over elegance. It is not to say the latter is without charm and character. At a certain point, churches, mosques, castles and town halls all begin to feel the same; it’s the smaller idiosyncrasies of a particular culture that start to become the defining reason behind seeking new adventures. While the beauty of Morocco won’t likely fade from memory anytime soon, I find it’s running across things like this advertisement for “Pizza” out front of a snack shop on the streets of Fes, Morocco’s second largest city, that keep me traveling.</p>
                                <div className="row">
                                    <div className="col-6">
                                        <img src={moroccanPizza} alt={"Imagine a beautiful picture here"} className="post-image-pizza"/>
                                    </div>
                                    <div className="col-6">
                                        <p className="post-text-p3">While “Pizza Hut” might have a slight problem with this chosen method for soliciting customers here in the US, borderline copyright infringement is apparently an acceptable practice in Morocco. I’m not sure whether it speaks to my lack of refinement or to a deeper level of appreciation for the peculiar, but these are the things that stay with with me. It is in the spirit of this little Moroccan snack shop that I dedicated an evening to creating the featured image for this post. An homage, if you will, to those little things in life that put a smile on your face.</p>
                                    </div>
                                </div>
                                <div style={{clear: 'left'}}></div>
                            </div>
                        </div>    
                    </div>
                </div>
            )
        }
    }    

}

export default MoroccanIngenuity
