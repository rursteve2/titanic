import React, { Component } from 'react';
import './App.css';
import AllPassengers from './components/AllPassengers'
import { getAllPassengers } from './services/api.js'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import AddPassenger from './components/AddPassenger'
import Charts from './components/Charts'




class App extends React.Component {
  constructor() {
    super()
    this.state = {
      passengers: [],
      newPassengerId: "",
      Survived: "",
      Pclass: "",
      Name: "",
      Sex: "",
      Age: "",
      SibSp: "",
      Parch: "",
      Ticket: "",
      Fare: "",
      Cabin: "",
      Embarked: ""
    }
  }

  onFormChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  componentDidMount = async () => {
    try {
      let data = await getAllPassengers()
      console.log(data.data)
      this.setState({
        passengers: data.data.passengers,
        newPassengerId: data.data.passengers.length + 1
      })
    } catch(e) {
      console.log(e)
    }
  }

  
  render() {
    const { passengers, newPassengerId, Survived, Pclass, Name, Sex, Age, SibSp, Parch, Ticket, Fare, Cabin, Embarked } = this.state
    return (
      <div className="App">
        <Header/>

        <Switch>
          <Route exact path="/" render={() => 
          <AddPassenger 
          onFormChange={this.onFormChange}
          PassengerId={newPassengerId}
          Survived={Survived}
          Pclass={Pclass}
          Name={Name}
          Sex={Sex}
          Age={Age}
          SibSp={SibSp}
          Parch={Parch}
          Ticket={Ticket}
          Fare={Fare}
          Cabin={Cabin}
          Embarked={Embarked}
          />}/>
          <Route path="/passengers" render={() =>
          <AllPassengers
          passengers={passengers}
          />}/>
          <Route path="/charts" render={() =>
          <Charts/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
