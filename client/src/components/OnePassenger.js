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
    return(
        <div>
            <p>{this.props.passenger.Name}</p>
            <p>{this.props.passenger.PassengerId}</p>
            <button id={this.props.index} onClick={(e) => this.deletePass(e, this.props.passenger.PassengerId)}>Delete</button>
            <button onClick={() => this.props.editModal()}>Edit</button>

        </div>
    )
}
}

export default OnePassenger