import axios from "axios";

//creating backend Config!
const Api = axios.create({
    baseURL: "http://localhost:5500",
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data"
    }

})

//test api 
export const testApi = () => Api.get("/test")

//register api 
export const registerUserApi = (data) => Api.post("/api/user/create", data)

//login ap
export const loginUserApi = (data) => Api.post("/api/user/login", data)

//create product API
export const createProductApi = (data) => Api.post("/api/product/create", data)

//get product API
export const getAllProductApi = () => Api.get("/api/product/get_all_products")

//get single product API
export const getSingleProductApi = (id) => Api.get(`/api/product/get_single_product/${id}`)