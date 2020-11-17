import axios from 'axios'
import { BACKEND_URL } from '@env'; 

const http = (token = false) => {
    return axios.create({
        baseURL: BACKEND_URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
        }
    })
}

export default http;