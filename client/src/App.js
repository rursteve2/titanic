import React, { Component } from 'react';
import './App.css';
import AllPassengers from './components/AllPassengers'
import { getAllPassengers } from './services/api.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      passengers: []
    }
  }

  componentDidMount = async () => {
    try {
      let data = await getAllPassengers()
      this.setState({
        passengers: data
      })
    } catch(e) {
      console.log(e)
    }
  }

  
  render() {
    return (
      <div className="App">
        <h1>Titanic</h1>
        <AllPassengers/>
      </div>
    );
  }
}

export default App;
