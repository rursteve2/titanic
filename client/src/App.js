import React, { Component } from 'react';
import { getAllPassengers } from './services/api.js';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import JqxGrid, { jqx } from './assets/jqwidgets-react/react_jqxgrid';
import Header from './components/Header'
import AllPassengers from './components/AllPassengers'
import AddPassenger from './components/AddPassenger'


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
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
      this.setState({
        data: data.data.passengers
      })
    } catch(e) {
      console.log(e)
    }
  }
    render() {
        const source =
            {
                data: this.state.data,
                datatype: 'json',
                datafields: [
                    { name: 'PassengerId', type: 'int' },
                    { name: 'Name', type: 'string' },
                    { name: 'Survived', type: 'bool' },
                    { name: 'Pclass', type: 'int' },
                    { name: 'Sex', type: 'string' },
                    { name: 'Age', type: 'int' },
                    { name: 'SibSp', type: 'int' },
                    { name: 'Parch', type: 'int' },
                    { name: 'Ticket', type: 'string' },
                    { name: 'Fare', type: 'float' },
                    { name: 'Cabin', type: 'string' },
                    { name: 'Embarked', type: 'string' },
                ],
                id: 'PassengerId',
                url: 'http://localhost:4567/passengers'
            };

        const dataAdapter = new jqx.dataAdapter(source);

        const cellsrenderer = (row, columnfield, value, defaulthtml, columnproperties, rowdata) => {
            if (value < 20) {
                return `<span style='margin: 4px; float:${columnproperties.cellsalign}; color: #ff0000;'>${value}</span>`;
            }
            else {
                return `<span style='margin: 4px; float:${columnproperties.cellsalign}; color: #008000;'>${value}</span>`;
            }
        };

        const columns=
            [
                { text: 'ID', datafield: 'PassengerId', width: 50 },
                { text: 'Name', datafield: 'Name', cellsrenderer: cellsrenderer, width: 250 },
                { text: 'Survived', columntype: 'checkbox', datafield: 'Survived', cellsalign: 'right', align: 'right' },
                { text: 'Pclass', datafield: 'Pclass', align: 'right', cellsalign: 'right'},
                { text: 'Sex', datafield: 'Sex', align: 'center', width: 70},
                { text: 'Age', datafield: 'Age' },
                { text: 'SibSp', datafield: 'SibSp' },
                { text: 'Parch', datafield: 'Parch' },
                { text: 'Ticket', datafield: 'Ticket' },
                { text: 'Fare', datafield: 'Fare', width: 70},
                { text: 'Cabin', datafield: 'Cabin' },
                { text: 'Embarked', datafield: 'Embarked' }
            ];  
        const { newPassengerId, Survived, Pclass, Name, Sex, Age, SibSp, Parch, Ticket, Fare, Cabin, Embarked } = this.state

        return (
          <div className="App">
            <Header/>
            <Switch>
              <Route exact path="/" render={() => 
              <div>
                <JqxGrid 
                width={1000} source={dataAdapter} columns={columns}
                pageable={true} autoheight={true} sortable={true}
                altrows={true} enabletooltips={true}
                selectionmode={'multiplecellsadvanced'} 
             />
             <p>No data? <input type="button" value="Refresh" onClick={() => window.location.reload()}/></p>
             </div>
             }/>
              <Route path="/passengers" render={() =>
              <AllPassengers
              passengers={this.state.data}
              />}/>
              <Route path="/charts" render={() => 
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
            </Switch>
            
            </div>
        );
    }
}

export default App;