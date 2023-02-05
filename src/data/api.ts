import axios from 'axios'

const api = axios.create({
    //baseURL: 'https://backend-25ww.onrender.com/api',
   baseURL:'http://localhost:3000/api'
})

export const getAllItems = () => api.get(`/shoppinglist`)
export const insertItem = (payload: any) => api.post(`/shoppinglist`, payload)

const apis = {
    getAllItems,
    insertItem
}

export default apis