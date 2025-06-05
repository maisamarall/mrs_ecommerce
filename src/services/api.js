import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dummyjson.com'
})

export const getProducts = (limit = 12, skip = 0) => 
  api.get(`/products?limit=${limit}&skip=${skip}`)

export const getProductById = (id) => 
  api.get(`/products/${id}`)

export const getCategories = () => 
  api.get('/products/categories')

export const getProductsByCategory = (category) => 
  api.get(`/products/category/${category}`)

export const searchProducts = (query) => 
  api.get(`/products/search?q=${query}`)

export default api
