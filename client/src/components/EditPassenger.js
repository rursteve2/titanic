import React, { Component } from 'react';


class EditPassenger extends Component {

    

    render() {
        return(
            <div className="modal">
                <h1>Modal</h1>
                <button onClick={() => this.props.closeEditModal()}>Close</button>
            </div>
        )
    }
}



export default EditPassenger