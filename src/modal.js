import React from "react";
import Profile from './profile'
import Selection from './selection.js'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childProfileRenting: "",
            bookTypes: [],
        }
        this.profileCallback = this.profileCallback.bind(this)
        this.selectionCallback = this.selectionCallback.bind(this)
        //this.handleChange = this.handleChange.bind(this)
        //this.grandChildCallback = this.grandChildCallback.bind(this)
    }
    profileCallback(rentingMsg) {
        this.setState({
            childProfileRenting: rentingMsg
        })
    }


    selectionCallback(currentSelection) {
        this.setState({ bookTypes: currentSelection })

    }

    render() {
        return (
            <React.Fragment>
                <div id="modal">
                    <div> Hey {this.props.parentsData.renderfname}</div>
                    <div> Please fill out the following data so we can know more about your needs: </div>

                    <Profile parentCallback={this.profileCallback} onChange={this.grandChildCallback} />
                    <Selection parentSelectionCallback={this.selectionCallback} />

                    <h1>Summary </h1>
                    <p>First name: {this.props.parentsData.renderfname} </p>
                    <p>Last name: {this.props.parentsData.renderlname} </p>
                    <p>Abo:{this.state.childProfileRenting}</p>
                    <p>Book types: {this.state.bookTypes}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Modal