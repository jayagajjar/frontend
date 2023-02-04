import axios from 'axios'

const api = axios.create({
    //baseURL: 'https://backend-25ww.onrender.com/api',
   baseURL:'http://localhost:3000/api'
})

export const getAllItems = () => api.get(`/shoppinglist`)

const apis = {
    getAllItems,
}

export default apis