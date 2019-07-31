import axios from 'axios'
const URL = `http://localhost:4567`

// const header = {
//     'ContentType': 'application/json',
//     'Accept': 'application/json'
//   };
// const config = {
//     headers: {
//       'ContentType': 'application/json'
//     }
//   };

const api = axios.create({
    baseURL: `${URL}`
    // headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'}
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
        const resp = await api.post('/passengers', data)
        console.log(resp.data.newPassenger)
        return resp.data.newPassenger
    } catch(e) {
        console.log(e)
    }
}