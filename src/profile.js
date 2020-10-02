import React from 'react'
import Selection from './selection.js'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            oneSelect: false,
            renting: this.props.renting,
            buying: this.props.renting,
            //currentSelection: this.state.currentSelection
            //newSelection: [],

        }
        this.handleSelect = this.handleSelect.bind(this);
        console.log("this.props")
    }

    handleSelect(e) {
        console.log("e.target.value", e.target.value)
        console.log("e.target.name", e.target.name)
        if (e.target.name === "yesR" && e.target.value === "on") {
            const newState = {
                renting: "I want to rent books"
            }
            this.setState({ newState })
            console.log("newStateBuy", newState)


        } else if (e.target.name === "noR" && e.target.value === "on") {
            const newState = {
                renting: "I don't want to rent books"
            }
            this.setState({ newState })
        }

        if (e.target.name === "yesB" && e.target.value === "on") {

            const newStateBuy = {
                buying: "I want to buy books"
            }
            this.setState({ newStateBuy })

        } else if (e.target.name === "noB" && e.target.value === "on") {
            const newStateBuy = {
                buying: "I don't want to buy books"
            }
            this.setState({ newStateBuy })
            console.log("newStateBuy", newStateBuy)
        }
    }



    render() {
        //console.log("selected Types", this.selectedTypes)

        return (
            <React.Fragment>
                <div>  I am interested in renting books:
                <form onChange={(e) => this.handleSelect(e)}>
                        <label> Yes </label>
                        <input type="radio" name="yesR" />
                        <label> No </label>
                        <input type="radio" name="noR" />

                    </form>
                </div>
                <div>  I am interested in buying books:
                <form onChange={(e) => this.handleSelect(e)}>
                        <label> Yes </label>
                        <input type="radio" name="yesB" />
                        <label> No </label>
                        <input type="radio" name="noB" />
                    </form>
                </div>
                <Selection />

            </React.Fragment>
        )
    }


}

export default Profile