import axios from "axios";

const apiReport = axios.create({
    baseURL: "http://localhost:3001"
})

export default apiReport