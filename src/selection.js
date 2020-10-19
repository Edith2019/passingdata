import React from 'react'

class Selection extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
        }
        this.handleList = this.handleList.bind(this);

    }

    handleList() {
        const currentSelection = [];
        let list = [...document.getElementById('selection')]
        for (var i = 0; i < list.length; i++) {
            if (list[i].checked === true) {
                currentSelection.push(list[i].name)
            }
        }

        // console.log("currentSelection", currentSelection)
        this.props.parentSelectionCallback(currentSelection)
    }



    render() {
        return (
            <React.Fragment>
                <div id="selectionContainer">
                    I want to read:
                <form id="selection" onClick={() => this.handleList()}>
                        <ul >
                            <li>
                                <input id="Comics" type="radio" name="Comics" />
                                <label> Comics</label>
                            </li>
                            <li >
                                <input id="Novel" type="radio" name="Novel" />
                                <label> Novel </label>
                            </li>
                            <li >
                                <input id="Roman" type="radio" name="Roman" />
                                <label> Roman </label>
                            </li>
                            <li >
                                <input id="Biogrpahy" type="radio" name="Biogrpahy" />
                                <label> Biogrpahy </label>
                            </li>
                        </ul>
                    </form>
                </div>
            </React.Fragment>
        )
    }


}

export default Selection