import React, { Component } from 'react';
import { getAllPassengers, createPassenger, editPassenger, getOnePassenger } from './services/api.js';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import JqxGrid, { jqx } from './assets/jqwidgets-react/react_jqxgrid';
import Header from './components/Header'
import AllPassengers from './components/AllPassengers'
import AddPassenger from './components/AddPassenger'
import Charts from './components/Charts'
import Modal from 'react-modal'
Modal.setAppElement('.editmodal')


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      newPassengerId: "",
      Survived: "0",
      Pclass: "",
      Name: "",
      Sex: "male",
      Age: "",
      SibSp: "",
      Parch: "",
      Ticket: "",
      Fare: "",
      Cabin: "",
      Embarked: "",
      isCreated: false,
      modalDisplay: false,
      editPassengerId: "",
      selectedPage: 1,
      pageCount: 0
    }
  }

  onFormChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  deletePassenger = async (id)=>{
    const refreshPass = this.state.data
    refreshPass.splice(id,1)
    await this.setState({
      data: refreshPass
    })
  }

  submitPassenger = async (e) => {
    e.preventDefault()
    const newPassenger = {"newPassenger": {
      "PassengerId": this.state.newPassengerId,
      "Survived": this.state.Survived,
      "Pclass": this.state.Pclass,
      "Name": this.state.Name,
      "Sex": this.state.Sex,
      "Age": this.state.Age,
      "SibSp": this.state.SibSp,
      "Parch": this.state.Parch,
      "Ticket": this.state.Ticket,
      "Fare": this.state.Fare,
      "Cabin": this.state.Cabin,
      "Embarked": this.state.Embarked
    }}
    await createPassenger(newPassenger)
    this.setState({
      isCreated: true
    })

  }

  componentDidMount = () => {
    this.loadData()
  }

  loadData = async () => {
    try {
      let data = await getAllPassengers()
      this.setState({
        data: data.data.passengers,
        newPassengerId: data.data.passengers.length + 1,
        pageCount: Math.ceil(data.data.passengers.length / 10)
      })
    } catch(e) {
      console.log(e)
    }
  }

  editModal = async (id) => {
    let modal = document.querySelector(".editmodal");
    modal.style.display = "block"
    let passengerData = await getOnePassenger(id)
    let passengerDataSpec = passengerData.data.onePassenger[0]
    console.log(passengerDataSpec)
    this.setState({
      editPassengerId: id,
      modalDisplay: true,
      Survived: passengerDataSpec.Survived,
      Pclass: passengerDataSpec.Pclass,
      Name: passengerDataSpec.Name,
      Sex: passengerDataSpec.Sex,
      Age: passengerDataSpec.Age,
      SibSp: passengerDataSpec.SibSp,
      Parch: passengerDataSpec.Parch,
      Ticket: passengerDataSpec.Ticket,
      Fare: passengerDataSpec.Fare,
      Cabin: passengerDataSpec.Cabin,
      Embarked: passengerDataSpec.Embarked
    })
  }
  closeEditModal = () => {
    let modal = document.querySelector(".editmodal");
    modal.style.display = "none"
    this.setState({
      editPassengerId: "",
      modalDisplay: false,
      Survived: "0",
      Sex: "male"
    })
  }

  submitEditModal = async (id, data) => {
    alert("Success!")
    await editPassenger(id, data)
  }

  handlePageClicked = data => {
    let selected = data.selected + 1
    this.setState({
      selectedPage: selected
    })
    console.log(selected)
  };

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
        const { data, newPassengerId, Survived, Pclass, Name, Sex, Age, SibSp, Parch, Ticket, Fare, Cabin, Embarked, isCreated } = this.state
        const editPassengerData = {
          "Survived": this.state.Survived,
          "Pclass": this.state.Pclass,
          "Name": this.state.Name,
          "Sex": this.state.Sex,
          "Age": this.state.Age,
          "SibSp": this.state.SibSp,
          "Parch": this.state.Parch,
          "Ticket": this.state.Ticket,
          "Fare": this.state.Fare,
          "Cabin": this.state.Cabin,
          "Embarked": this.state.Embarked
        }
        
        return (
          <div className="App">
            <Header/>
            <Modal 
            className="modal"
            isOpen={this.state.modalDisplay}
            >
              <form onSubmit={() => this.submitEditModal(this.state.editPassengerId, editPassengerData)}>
                <p>Name</p>
                <input type="text" name="Name" value={Name} placeholder="Name" onChange={this.onFormChange} />
                <p>Survived?</p>
                <select name="Survived" value={Survived} onChange={this.onFormChange}>
                    <option value="0" defaultValue>No</option>
                    <option value="1">Yes</option>
                </select>
                <p>Pclass</p>
                <input type="text" name="Pclass" value={Pclass} placeholder="Pclass" onChange={this.onFormChange}/>
                <p>Sex</p>
                <select name="Sex" value={Sex} onChange={this.onFormChange}>
                    <option value="male" defaultValue>Male</option>
                    <option value="female">Female</option>
                </select>
                <p>Age</p>
                <input type="number" name="Age" value={Age} placeholder="Age" onChange={this.onFormChange}/>
                <p>SibSp</p>
                <input type="number" name="SibSp" value={SibSp} placeholder="SibSp" onChange={this.onFormChange}/>
                <p>Parch</p>
                <input type="number" name="Parch" value={Parch} placeholder="Parch" onChange={this.onFormChange}/>
                <p>Ticket</p>
                <input type="text" name="Ticket" value={Ticket} placeholder="Ticket" onChange={this.onFormChange}/>
                <p>Fare</p>
                <input type="text" name="Fare" value={Fare} placeholder="Fare" onChange={this.onFormChange}/>
                <p>Cabin</p>
                <input type="text" name="Cabin" value={Cabin} placeholder="Cabin" onChange={this.onFormChange}/>
                <p>Embarked</p>
                <input type="text" name="Embarked" value={Embarked} placeholder="Embarked" onChange={this.onFormChange}/>
                <input type="submit" />
            </form>
              <button onClick={() => this.closeEditModal()}>Close without changes</button>
            </Modal>
            <Switch>
              <Route exact path="/" render={() => 
              <div>
                <Charts 
                data={data} 
                loadData={this.loadData}
                />
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
              deletePassenger={this.deletePassenger}
              loadData={this.loadData}
              editModal={this.editModal}
              handlePageClicked={this.handlePageClicked}
              pageCount={this.state.pageCount}
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
               isCreated={isCreated}
               submitPassenger={this.submitPassenger}
               />}/>
            </Switch>
            
            </div>
        );
    }
}

export default App;
