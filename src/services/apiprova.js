import axios from "axios";

const apiprova = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Authorization': 'Bearer ',
        'content-type': 'application/json;charset=utf-8',
    }
})


export default apiprova