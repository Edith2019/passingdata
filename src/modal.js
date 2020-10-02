import React from "react";
import Profile from './profile'
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renting: this.props.renting,
            buying: ""
        }
        console.log("this.props", this.props)
    }
    render() {
        return (
            <React.Fragment>
                <div> Hey {this.props.parentsData.renderfname}</div>
                <div> Please fill out the following data so we can know more about your needs: </div>
                <Profile renting={this.props.renting} />
            </React.Fragment>
        )
    }
}

export default Modal