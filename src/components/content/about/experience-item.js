// PACKAGES
import React, { Component } from 'react'
// CSS
import "./experience-item.css"

class ExperienceItem extends Component {

    render() {
        return(
            <div>
                <div className="exp-container">
                    <img src={this.props.expLogo} alt={"Oh no! An image is missing!"} className="exp-icon"/>
                    <h2 className="exp-company">{this.props.expCompany}</h2>
                    <div className="exp-location">{this.props.expLocation}</div>
                    <div></div>
                    <div className="exp-position">{this.props.expPosition1}</div>
                    <span className="exp-dates">{this.props.expDate1}</span>
                    <div></div>
                    <div className="exp-position">{this.props.expPosition2}</div>
                    <span className="exp-dates">{this.props.expDate2}</span>
                    <div></div>
                    <div className="exp-position">{this.props.expPosition3}</div>
                    <span className="exp-dates">{this.props.expDate3}</span>
                    {/* <div className="exp-content">{this.props.expContent}</div> */}
                </div>
            </div>
        )
    } 
}

export default ExperienceItem