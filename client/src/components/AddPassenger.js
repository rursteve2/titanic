import React from 'react'

function AddPassenger(props) {
    const { onFormChange, PassengerId, Survived, Pclass, Name, Sex, Age, SibSp, Parch, Ticket, Fare, Cabin, Embarked } = props
    return(
        <div>
            <form>
                <input type="text" name="Name" value={Name} placeholder="Name" onChange={onFormChange}/>
                <p>Survived?</p>
                <select name="Survived" value={Survived} onChange={onFormChange}>
                    <option value="0" defaultValue>No</option>
                    <option value="1">Yes</option>
                </select>
                <input type="text" name="Pclass" placeholder="Pclass" />
                <p>Sex</p>
                <select>
                    <option value="male" defaultValue>Male</option>
                    <option value="female">Female</option>
                </select>
                <input type="number" name="Age" placeholder="Age" />
                <input type="number" name="SibSp" placeholder="SibSp" />
                <input type="number" name="Parch" placeholder="Parch" />
                <input type="text" name="Ticket" placeholder="Ticket" />
                <input type="text" name="Fare" placeholder="Fare" />
                <input type="text" name="Cabin" placeholder="Cabin" />
                <input type="text" name="Embarked" placeholder="Embarked" />
            </form>
        </div>
    )
}

export default AddPassenger