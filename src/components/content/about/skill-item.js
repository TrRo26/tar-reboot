import React, { Component } from 'react'
// import " .css"

class SkillItem extends Component {

    render() {
        return(
            <div>
                {/* <Logo /> */}
                <div class="skillbar" data-percent={this.props.dataPercent}>
                    <div class="skillbar-title-main">{this.props.skill}</div>
                    <div class="skill-bar-percent-main">{this.props.dataPercent}</div>
                    <div class="skillbar-bar-main" style={{width: this.props.dataPercent}}></div>
                </div>
            </div>
        )
    } 
}

export default SkillItem