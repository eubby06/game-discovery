import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "706c16d6ee78411d90440804dc86f7aa"
    }
})

export default apiClient;