import axios from "axios";

const api = axios.create({
    baseURL: "https://ipapi.co/"
})



export default api