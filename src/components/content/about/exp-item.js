import React, { Component } from 'react'
// import " .css"

class ExpItem extends Component {

    render() {
        return(
            <div>
                {/* <Logo /> */}
                <div>
                    <h2 className="exp-company">{this.props.expCompany}</h2>
                    <h2 className="exp-location">{this.props.expLocation}</h2>
                    <div></div>
                    <div className="exp-position">{this.props.expPosition1}</div>
                    <span className="exp-dates">{this.props.expDate1}</span>
                    <div></div>
                    <div className="exp-position">{this.props.expPosition2}</div>
                    <span className="exp-dates">{this.props.expDate2}</span>
                    <div></div>
                    <div className="exp-position">{this.props.expPosition3}</div>
                    <span className="exp-dates">{this.props.expDate3}</span>
                    <div className="exp-content">{this.props.expContent}</div>
                </div>
            </div>
        )
    } 
}

export default ExpItem
