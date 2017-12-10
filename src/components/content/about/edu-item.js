import React, { Component } from 'react'
// import " .css"

class EduItem extends Component {

    render() {
        return( 
			<div>
				{/* <Logo /> */}
				<div>
					<h2 className="edu-institute">{this.props.eduInstitute}</h2>
					<div className="edu-location">{this.props.eduLocation}</div>
					<div></div>
					<div className="edu-degree">{this.props.eduDegree}</div>
					<span className="edu-dates">{this.props.eduDate}</span>
					<div className="edu-department">{this.props.eduDepartment}</div>
				</div>
			</div>
        )
    } 
}

export default EduItem
