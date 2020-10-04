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
        //console.log("this.props in modal", this.props.renting)
        //console.log("this.props", this.childProfilData)
        this.profileCallback = this.profileCallback.bind(this)
        this.selectionCallback = this.selectionCallback.bind(this)
        //console.log("this.props", this.props)

    }
    profileCallback(rentingMsg) {
        console.log("rentingmsg", rentingMsg)

        this.setState({ childProfileRenting: rentingMsg })
    }

    selectionCallback(currentSelection) {
        console.log("currentselection", currentSelection)
        this.setState({ bookTypes: currentSelection })

    }

    render() {
        console.log("childProfileRenting", this.state.childProfileRenting)

        return (
            <React.Fragment>
                <div> Hey {this.props.parentsData.renderfname}</div>
                <div> Please fill out the following data so we can know more about your needs: </div>
                <Profile parentCallback={this.profileCallback} />
                <Selection parentSelectionCallback={this.selectionCallback} />
            </React.Fragment>
        )
    }
}

export default Modal