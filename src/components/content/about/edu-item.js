import React, { Component } from 'react'
// import " .css"

class EduItem extends Component {

    render() {
        return( 
			<div>
				{/* <Logo /> */}
				<div>
					<h2 class="edu-institute">{this.props.eduInstitute}</h2>
					<h2 class="edu-location">{this.props.eduLocation}</h2>
					<div></div>
					<div class="edu-degree">{this.props.eduDegree}</div>
					<span class="edu-dates">{this.props.eduDate}</span>
					<div class="edu-department">{this.props.eduDepartment}</div>
				</div>
			</div>
        )
    } 
}

export default EduItem
