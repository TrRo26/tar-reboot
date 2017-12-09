import React, { Component } from 'react'
// import " .css"

class SkillItem extends Component {

    render() {
        return(
            <div>
                {/* <Logo /> */}
                <div className="skillbar" data-percent={this.props.dataPercent}>
                    <div className="skillbar-title-main">{this.props.skill}</div>
                    <div className="skill-bar-percent-main">{this.props.dataPercent}</div>
                    <div className="skillbar-bar-main" style={{width: this.props.dataPercent}}></div>
                </div>
            </div>
        )
    } 
}

export default SkillItem