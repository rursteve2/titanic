import React, { Component } from 'react'
import axios from 'axios'

class OnePassenger extends Component {


    deletePass = async (e, id) => {
        e.preventDefault()
        console.log(id)
        await axios.delete(`http://localhost:4567/passengers/${id}`);
        // this.props.deletePassenger(id)
        this.props.loadData()
         console.log("deleted!")
    }
    render() {
        const { passenger } = this.props
    return(
        <div className="onepassenger">
            <p>Passenger ID: {passenger.PassengerId}</p>
            <p>{passenger.Name}</p>
            <p>{passenger.Survived === 0 ? "Dead" : "Survived"}</p>
            <p>{passenger.Sex.charAt(0).toUpperCase() + passenger.Sex.slice(1)}</p>
            <button id={this.props.index} onClick={(e) => this.deletePass(e, this.props.passenger.PassengerId)}>Delete</button>
            <button onClick={() => this.props.editModal(this.props.passenger.PassengerId)}>Edit</button>

        </div>
    )
}
}

export default OnePassenger