import React from 'react'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            oneSelect: false,
            //newState: {},
            renting: "",
            buying: "",
            //}
            rentingMsg: "",
            // buyingMsg: "",

        }
        this.handleSelect = this.handleSelect.bind(this);
        //this.sendDataParents = this.sendDataParents.bind(this)
        //console.log("renting", this.renting.renting)
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

        // if (e.target.name === "yesB" && e.target.value === "on") {

        //     const newState = {
        //         buying: "I want to buy books"
        //     }
        //     this.setState({ newState }, () => {
        //         this.props.parentCallback(this.state.newState.buying)

        //     })

        // } else if (e.target.name === "noB" && e.target.value === "on") {
        //     const newState = {
        //         buying: "I don't want to buy books"
        //     }
        //     this.setState({ newState }, () => {
        //         this.props.parentCallback(this.state.newState.buying)

        //     })
        // }
        //console.log("renting message", this.renting)

        // this.props.parentCallback(this.renting)

    }

    // sendDataParents() {
    //     //console.log("props in sendData", newState)
    //     // this.props.parentCallback(this.state.newState)
    //     console.log("this.newSate", this.state.rentingMsg)
    // }

    render() {
        //console.log("selected Types", this.selectedTypes)
        //console.log("newStaterent", this.newState)

        return (

            <React.Fragment>
                <div>  I am interested in renting books:
                <form onChange={(e) => this.handleSelect(e)} >
                        <label> Yes </label>
                        <input type="radio" name="yesR" />
                        <label> No </label>
                        <input type="radio" name="noR" />

                    </form>
                </div>
                {/* <div>  I am interested in buying books: */}
                {/* <form onChange={(e) => this.handleSelect(e)}>
                        <label> Yes </label>
                        <input type="radio" name="yesB" />
                        <label> No </label>
                        <input type="radio" name="noB" />
                    </form>
                </div> */}
                {/* {this.state.newState.renting}
                {this.state.newState.buying} */}

            </React.Fragment>
        )
    }


}

export default Profile