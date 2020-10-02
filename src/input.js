import React from 'react';
import logo from './logo.svg';
import Modal from './modal.js'
import './App.css';


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: "",
            lname: "",
            renderfname: "",
            renderlname: "",
            renting: "",
            buying: "",
            isVisible: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setVisible = this.setVisible.bind(this)

    }
    handleChange(e) {
        //console.log("e.target", e.target.value)
        //console.log("this.fname", e.target.name)

        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        })
    }


    handleSubmit() {
        this.setState({
            renderfname: this.state.fname,
            renderlname: this.state.lname,

        })

    }

    setVisible() {

        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {
        this.isVisible = this.state.isVisible
        //console.log("this.props", this.props.fname)
        return (
            <React.Fragment>
                <div>
                    <p>TEST</p>
                    <form>
                        <input type="text" id="fname" name="fname" onChange={e => this.handleChange(e)} placeholder="first Name" />
                        <input type="text" id="lname" name="lname" onChange={e => this.handleChange(e)} placeholder="last Name" />

                    </form>
                    <button type="button" onClick={() => this.handleSubmit()}> submit </button>

                    <h1> Welcome {this.state.renderfname} {this.state.renderlname} </h1>
                    <p>Please click next to start your profile</p>
                    <button onClick={() => this.setVisible()}> Next </button>
                    {this.isVisible && (
                        <Modal isVisible={this.isVisible} parentsData={this.state} />
                    )
                    }
                </div>
            </React.Fragment>
        )
    }

}

export default Input;