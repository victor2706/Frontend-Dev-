import axios from "axios";

const apiprova = axios.create({
    baseURL: 'https://api.artic.edu/api/v1/',
    headers: {
        'content-type': 'application/json;charset=utf-8',
    }
})


export default apiprova