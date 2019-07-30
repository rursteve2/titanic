import axios from 'axios'
const URL = `http://localhost:4567`

const api = axios.create({
    baseURL: `${URL}`
})

export const getAllPassengers = async () => {
    try {
        const resp = await api.get('/passengers')
        return resp
    } catch (e) {
        console.log(e)
    }
}