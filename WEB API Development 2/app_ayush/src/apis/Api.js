import axios from "axios";

//creating backend Config!
const Api = axios.create({
    baseURL: "http://localhost:5500",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }

})

//test api 
export const testApi = () => Api.get("/test")

