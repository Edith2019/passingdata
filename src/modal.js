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
    }

    //SetUp a callBack to get the data from the child component
    profileCallback(rentingMsg) {
        this.setState({
            childProfileRenting: rentingMsg
        })
    }

    //SetUp a callBack to get the data from the child component
    selectionCallback(currentSelection) {
        this.setState({ bookTypes: currentSelection })
        console.log("this.state in modal", this.state.bookTypes)

    }


    render() {
        return (
            <React.Fragment>
                <div id="modal">
                    {/* by calling this.props.parentsData we can access the parent props*/}
                    <div> Hey {this.props.parentsData.renderfname}</div>
                    <div> Please fill out the following data so we can know more about your needs: </div>
                    {/* When the state  in the child will change, it sill call profileCallback via parentCallback being called in the child component*/}
                    <Profile parentCallback={this.profileCallback} />
                    <Selection parentSelectionCallback={this.selectionCallback} />
                    {/* Render the data from the parent by using props and from the child by using state defined in the callback*/}
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