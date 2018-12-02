// PACKAGES
import React, { Component } from 'react'
// CSS
import "./2018-09-02.css"
// IMAGES
import finishedProduct from "./finished_product.png"

// COMPONENTS
import PostCard from "../../post-card.js"

class DIYDesk extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            showCard: true,
        }
    }

    postData() {
        return({
            postTitle: "DIY Metal & Wood Rustic Industrial Desk",
            postSubTitle: "A rather successful attempt at making a rustic industrial style desk from scratch.",
            postDate: "September 02, 2018",
            postMainImage: finishedProduct,
            postTags: ["design", "DIY"],
            postPath: "diy-rustic-desk",
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

                            <p className="post-text-p1">For ages I needed a replacement for a tiny Ikea desk suffering from the early stages of old age. After combing the internet for days and not finding what I was looking for, I decided to make it myself. Here is a look at the process and the end result.</p>

                            <div>
                                
                                <div className="row">
                                    <div className="col-4 post-image-container-all">
                                        <img src={finishedProduct} alt={"Imagine a beautiful picture here"} className="post-image-all post-image-ag"/>
                                        <div className="contact-info-all">
                                            <p>Kronobergsgatan 37</p>
                                            <p>112 33 Stockholm</p>
                                            <p className="contact-info-padding">+46 (8) 41068100</p>
                                            <a href="http://www.restaurangag.se/?lang=en" target="_blank">website</a>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <p className="post-text-ag post-text-all"><span className="restaurant-title">AG </span> Tucked away on the far side of the island of Kungsholmen in the Fridhemsplan area, the unassuming entrance down a quiet side street leads to a set of stairs spiraling up to this hip and modern chophouse. Not for the squeamish, fresh cuts of meat dangle from hooks on the landing as you walk in before being offered the choice of grabbing a drink in the bustling bar area or diving right into their fantastic selection of dishes. Cuts are listed by country of origin and come with that respective nation’s flag perched on top making sampling a few different selections that much more enjoyable. This place sports a fairly comprehensive wine list as well – if you happen to be into dry reds, try the Ribera Del Duero Pedrosa Crianza, it’s relatively inexpensive and nearly impossible to find in the US.</p>
                                    </div>
                                </div>

                                {/* <div className="row">
                                    <div className="col-4 post-image-container-all">
                                        <img src={z} alt={"Imagine a beautiful picture here"} className="post-image-all post-image-brewdog"/>
                                        <div className="contact-info-all">
                                            <p>S:t Eriksgatan 56</p>
                                            <p>112 34 Stockholm</p>
                                            <p className="contact-info-padding">+46 (8) 6502110</p>
                                            <a href="http://www.brewdogbar.se/baren-stockholm" target="_blank">website</a>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <p className="post-text-brewdog post-text-all"><span className="restaurant-title">BrewDog </span> Located on the island of Kungsholmen, and now with a location in Söder, this successful Scottish brewery has incredible fries and burgers and an intimidating selection of beer. With industrial chic décor and a stylish yet down to earth crowd, it’s the perfect place to grab both a delicious craft beer and high quality pub fare.</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-4 post-image-container-all">
                                        <img src={z} alt={"Imagine a beautiful picture here"} className="post-image-all post-image-flyingElk"/>
                                        <div className="contact-info-all">
                                            <p>Mälartorget 15</p>
                                            <p>111 27 Stockholm</p>
                                            <p className="contact-info-padding">+46 (8) 208583</p>
                                            <a href="http://www.theflyingelk.se" target="_blank">website</a>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <p className="post-text-flyingElk post-text-all"><span className="restaurant-title">The Flying Elk </span> If you’re not up for stepping off the beaten path, this sleek place conveniently located in Gamla Stan offers a good selection of traditional Swedish cuisine. While not the cheapest, it’s a solid choice after a long day of wandering the cobbled streets of Stockholm’s old town.</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-4 post-image-container-all">
                                        <img src={z} alt={"Imagine a beautiful picture here"} className="post-image-all post-image-pelikan"/>
                                        <div className="contact-info-all">
                                            <p>Blekingegatan 40</p>
                                            <p>116 62 Stockholm</p>
                                            <p className="contact-info-padding">+46 (8) 55609090</p>
                                            <a href="http://www.pelikan.se/en" target="_blank">website</a>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <p className="post-text-pelikan post-text-all"><span className="restaurant-title">The Pelikan </span>Located in Södermalm, the bohemian center of Stockholm, this old beer hall offers the chance to try some traditional Swedish fare in pleasant surroundings accentuated by several large and impressive paintings. Split into a trendy bar area – often with only standing room left – and a large hall with individual tables, this restaurant is a good place to check the classic dish of Swedish meatballs off your list. If you’re a lover of swine, try the boiled knuckle of pork – extremely tender and served with 3 different styles of mustard, it does not disappoint.</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-4 post-image-container-all">
                                        <img src={z} alt={"Imagine a beautiful picture here"} className="post-image-all post-image-hos"/>
                                        <div className="contact-info-all">
                                            <p>Hornsgatan 151</p>
                                            <p>117 34 Stockholm</p>
                                            <p className="contact-info-padding">+46 (8) 844420</p>
                                            <a href="http://hoskina.se" target="_blank">website</a>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <p className="post-text-hos post-text-all"><span className="restaurant-title">Ho’s Chinese Restaurant </span>Positioned nicely in the increasingly trendy area of Hornstull, this place serves up fantastic Chinese dishes in a bustling and cozy atmosphere. Definitely worth a visit if your in the area.</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-4 post-image-container-all">
                                        <img src={z} alt={"Imagine a beautiful picture here"} className="post-image-all post-image-indianStories"/>
                                        <div className="contact-info-all">
                                            <p>Jungfrugatan 6</p>
                                            <p>114 44 Stockholm</p>
                                            <p className="contact-info-padding">+46 (8) 4426995</p>
                                            <a href="http://indianstories.se" target="_blank">website</a>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <p className="post-text-indianStories post-text-all"><span className="restaurant-title">Indian Stories </span>In the center of the upscale neighborhood of Östermalm, this small restaurant provides a delicious selection of dishes with quiet surroundings. Not a bad choice if you’re in the market for some delectable Indian cuisine.</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-4 post-image-container-all">
                                        <img src={z} alt={"Imagine a beautiful picture here"} className="post-image-all post-image-laNeta"/>
                                        <div className="contact-info-all">
                                            <p>Barnhusgatan 2</p>
                                            <p>111 23 Stockholm</p>
                                            <p className="contact-info-padding">+46 8 411 58 80</p>
                                            <a href="http://laneta.se" target="_blank">website</a>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <p className="post-text-laNeta post-text-all"><span className="restaurant-title">La Neta </span>While almost entirely devoid of Mexican cuisine, Stockholm does have one decent option for those who find themselves with a craving. Offering solid tacos in a low-key setting, this Norrmalm hotspot is almost always crowded. Positioned right off the popular walking street of Drottninggatan, you’ll probably find yourself walking by at some point.</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-4 post-image-container-all">
                                        <img src={z} alt={"Imagine a beautiful picture here"} className="post-image-all post-image-ibolina"/>
                                        <div className="contact-info-all">
                                            <p>Essinge Brogata 4</p>
                                            <p>112 61 Stockholm</p>
                                            <p className="contact-info-padding">+46 (8) 6560002</p>
                                            <a href="https://www.facebook.com/Pizzeria-Ibolina-265390290475856/" target="_blank">website</a>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <p className="post-text-ibolina post-text-all"><span className="restaurant-title">Pizzeria iBolina </span>While probably not worth a special trek over to the little island of Lilla Essingen, should you find yourself in the area be sure to stop into iBolina for one of the most inexpensive and delicious meals available in Stockholm. While the thinner crust, Swedish style pizza is not everyone’s favorite, it’s the only style you’re likely to find and this place does it the best. For a truly unique and incredibly delicious pizza, try the ‘Alpers Special’ – steak, banana, pineapple and curry with béarnaise sauce on the side.</p>
                                    </div>
                                </div> */}

                                {/* <div style={{clear: 'left'}}></div> */}
                            </div>
                        </div>    
                    </div>
                </div>
            )
        } else {
            return null
        }
    } 
}

export default DIYDesk
         