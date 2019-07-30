import React from 'react'

function OnePassenger(props) {
    console.log(props)
    return(
        <div>
            <h1>{props.passenger.Name}</h1>

        </div>
    )
}

export default OnePassenger