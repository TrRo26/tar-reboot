import React, { Component } from 'react'
import "./education-item.css"

class EducationItem extends Component {

    render() {
        return( 
			<div className="edu-container">
				<img src={this.props.eduSeal} alt={"Oh no! An image is missing!"} className="edu-seal"/>
				<h2 className="edu-institute">{this.props.eduInstitute}</h2>
				<div className="edu-location">{this.props.eduLocation}</div>
				<div></div>
				<div className="edu-degree">{this.props.eduDegree}</div>
				<span className="edu-dates">{this.props.eduDate}</span>
				<div className="edu-department">{this.props.eduDepartment}</div>
			</div>
        )
    } 
}

export default EducationItem
