import React from 'react';
import Modal from './modal.js'


class Input extends React.Component {
    constructor(props) {
        super(props)
        //define props
        this.state = {
            fname: "",
            lname: "",
            renderfname: "",
            renderlname: "",
            renting: "",
            buying: "",
            isVisible: false,
            grandChildData: "",
        }
        //bind this to function so when called, will have the particular this binded to it
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setVisible = this.setVisible.bind(this)
    }

    handleChange(e) {
        //Get the name of the inputfield and assign it the value using e.target
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit() {
        //set up new keys with the associated value in order to only render the final name on submit
        this.setState({
            renderfname: this.state.fname,
            renderlname: this.state.lname,
        })
    }

    setVisible() {
        //onClick, set up the oppisite value (true or false)
        this.setState({
            isVisible: !this.state.isVisible
        })
    }


    render() {
        this.isVisible = this.state.isVisible
        return (
            <React.Fragment>
                <div id="input">
                    <form className="parentsCSS">
                        <input type="text" id="fname" name="fname" onChange={e => this.handleChange(e)} placeholder="first Name" />
                        <input type="text" id="lname" name="lname" onChange={e => this.handleChange(e)} placeholder="last Name" />
                    </form>
                    <button type="button" onClick={() => this.handleSubmit()}>submit </button>
                    <h1> Welcome {this.state.renderfname} {this.state.renderlname} </h1>
                    <p>Please click next to start your profile</p>
                    <button onClick={() => this.setVisible()}> Next </button>
                    {this.isVisible && (
                        // parentsData is a placeholder to pass the states to the child component
                        <Modal isVisible={this.isVisible} parentsData={this.state} />
                    )
                    }
                </div>
            </React.Fragment>
        )
    }

}

export default Input;