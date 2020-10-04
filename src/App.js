import React from 'react';
import './App.css';
import Input from './input.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <Input />
      </React.Fragment>
    )
  }
}

export default App;
