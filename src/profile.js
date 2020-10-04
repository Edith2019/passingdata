import React from 'react'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            renting: "",
            rentingMsg: "",
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e) {
        if (e.target.name === "yesR" && e.target.value === "on") {
            const newState = {
                renting: "I want to rent books"
            }
            this.setState({ newState }, () => {
                this.props.parentCallback(this.state.newState.renting)
            })
        } else if (e.target.name === "noR" && e.target.value === "on") {
            const newState = {
                renting: "I don't want to rent books"
            }
            this.setState({ newState }, () => {
                this.props.parentCallback(this.state.newState.renting)
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div id="profile">  I am interested in renting books:
                <form onChange={(e) => this.handleSelect(e)} >
                        <label> Yes </label>
                        <input type="radio" name="yesR" />
                        <label> No </label>
                        <input type="radio" name="noR" />

                    </form>
                </div>
            </React.Fragment>
        )
    }


}

export default Profile