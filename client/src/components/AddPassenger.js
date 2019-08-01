import React from 'react'

function AddPassenger(props) {
    const { submitPassenger, onFormChange, PassengerId, Survived, Pclass, Name, Sex, Age, SibSp, Parch, Ticket, Fare, Cabin, Embarked } = props
    return(
        <div>
            <form onSubmit={submitPassenger}>
                <p>Name</p>
                <input type="text" name="Name" value={Name} placeholder="Name" onChange={onFormChange}/>
                <p>Survived?</p>
                <select name="Survived" value={Survived} onChange={onFormChange}>
                    <option value="0" defaultValue>No</option>
                    <option value="1">Yes</option>
                </select>
                <p>Pclass</p>
                <input type="text" name="Pclass" value={Pclass} placeholder="Pclass" onChange={onFormChange} />
                <p>Sex</p>
                <select name="Sex" value={Sex} onChange={onFormChange}>
                    <option value="male" defaultValue>Male</option>
                    <option value="female">Female</option>
                </select>
                <p>Age</p>
                <input type="number" name="Age" value={Age} placeholder="Age" onChange={onFormChange} />
                <p>SibSp</p>
                <input type="number" name="SibSp" value={SibSp} placeholder="SibSp" onChange={onFormChange} />
                <p>Parch</p>
                <input type="number" name="Parch" value={Parch} placeholder="Parch" onChange={onFormChange} />
                <p>Ticket</p>
                <input type="text" name="Ticket" value={Ticket} placeholder="Ticket" onChange={onFormChange} />
                <p>Fare</p>
                <input type="text" name="Fare" value={Fare} placeholder="Fare" onChange={onFormChange} />
                <p>Cabin</p>
                <input type="text" name="Cabin" value={Cabin} placeholder="Cabin" onChange={onFormChange} />
                <p>Embarked</p>
                <input type="text" name="Embarked" value={Embarked} placeholder="Embarked" onChange={onFormChange} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddPassenger