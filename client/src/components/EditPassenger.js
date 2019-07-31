import React, { Component } from 'react';


class EditPassenger extends Component {

    closeEditModal = () => {
        let modal = document.querySelector(".editmodal");
        modal.style.display = "none"
      }

    render() {
        return(
            <div className="modal">
                <h1>Modal</h1>
                <button onClick={() => this.closeEditModal()}>Close</button>
            </div>
        )
    }
}



export default EditPassenger