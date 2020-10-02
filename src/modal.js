import React from "react";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


        }
        console.log("this.props", this.props)
    }
    render() {
        return (
            <React.Fragment>
                <div> Hey I am visible</div>
            </React.Fragment>
        )
    }
}

export default Modal