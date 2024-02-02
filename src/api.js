import axios from 'axios'

let api = 'http://127.0.0.1:8000/api'

export const postData = async (endpoint, data)=>{
    let req = await axios.post(api+endpoint,data)
    return req.data
}

export const getData = async (endpoint)=>{
    let req = await axios.get(api+endpoint)
    return req.data
}
