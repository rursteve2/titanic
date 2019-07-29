const { Sequelize } = require('sequelize')

const db = new Sequelize({
    database: 'titanic_db',
    dialect: 'postgres'
})

const Passenger = db.define('passenger', {
    PassengerId: Sequelize.INTEGER,
    Survived: Sequelize.INTEGER,
    Pclass: Sequelize.INTEGER,
    Name: Sequelize.STRING,
    Sex: Sequelize.STRING,
    Age: Sequelize.INTEGER,
    SibSp: Sequelize.INTEGER,
    Parch: Sequelize.INTEGER,
    Ticket: Sequelize.STRING,
    Fare: Sequelize.FLOAT,
    Cabin: Sequelize.STRING,
    Embarked: Sequelize.STRING
})

module.exports = {
    sequelize,
    Passenger
}