import axios from "axios";

const api = axios.create({
    baseURL: "http://api.ipstack.com/"
})

export default api