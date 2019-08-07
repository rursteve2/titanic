const express = require('express');
const { Passenger } = require('./models')
const passengerRouter = express.Router();

passengerRouter.get('/', async (request, response) => {
    try {
        const passengers = await Passenger.findAll();
        response.json({passengers})
    } catch(e) {
        response.status(500).json({msg: e.message})
    }
})

passengerRouter.post('/', async (request, response) => {
    try {
        const newPassenger = await Passenger.create(request.body)
        response.json({newPassenger})
    } catch(e) {
        response.status(500).json({msg: e.message})
    }
})

passengerRouter.get('/:id', async (request, response) => {
    try {
        const id = request.params.id
        const onePassenger = await Passenger.findByPk(id)
        response.json({onePassenger})
    } catch (e) {
        console.log(e)
    }
})

passengerRouter.delete('/:id', async (request, response) => {
    try {
        const id = request.params.id
        const deletePassenger = await Passenger.destroy({
            where: {
                PassengerId: id
            }
        })
        response.send(`Passenger ${id} Deleted!`)
    } catch (e) {
        console.log(e)
    }
})

passengerRouter.put('/:id', async (request, response) => {
    try {
        const id = request.params.id
        const editPassenger = await Passenger.findByPk(id)
        if (editPassenger) await editPassenger.update(request.body)
        response.json(editPassenger)
    } catch (e) {
        console.log(e)
    }
})



module.exports = {
    passengerRouter
}