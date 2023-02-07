import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-25ww.onrender.com/api',
   //baseURL:'http://localhost:3000/api'
})

export const getAllItems = () => api.get(`/shoppinglist`)
export const insertItem = (payload: any) => api.post(`/shoppinglist`, payload)
export const deleteItemById = (id:string) => api.delete(`/shoppinglist/${id}`)


const apis = {
    getAllItems,
    insertItem,
    deleteItemById
}

export default apis