import axios from 'axios'
const URL = `http://localhost:4567`
const config = {    
    headers: {
        'Content-Type': 'application/json', 
        'Accept': '*/*',
        "Access-Control-Allow-Origin": "*",
        'Cache-Control': 'no-cache'
    }
}

const api = axios.create({
    baseURL: `${URL}`
    // headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
})

export const getAllPassengers = async () => {
    try {
        const resp = await api.get('/passengers')
        return resp
    } catch (e) {
        console.log(e)
    }
}

export const createPassenger = async (data) => {
    try {
        const resp = await api.post('/passengers', data, config)
        // const resp = await axios.post("http://localhost:4567/passengers", data, config)
        console.log(resp.data.newPassenger)
        return resp.data.newPassenger
    } catch(e) {
        console.log(e)
    }
}

export const getOnePassenger = async(id) => {
    try {
        const resp = await api.get(`/passengers/${id}`)
        return resp
    } catch(e) {
        console.log(e)
    }
}

export const editPassenger = async (id, data) => {
    try {
        const resp = await api.put(`/passengers/${id}`, data)
        console.log(resp)
        return resp
    } catch(e) {
        console.log(e)
    }
}