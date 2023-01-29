import axios from "axios"


const baseAPI = axios.create({
    baseURL:'http://localhost:3000'
})


export const getBooks = async() =>{
    const response = await baseAPI.get('/books')
    return response.data
}

export const getBook = async(id) =>{
    const response = await baseAPI.get(`/books/${id}`)
    return response.data
}

export const createBook = async(data) =>{
    const response = await baseAPI.post('/books',data)
    return response
}

export const editBook = async(data) =>{
    const response = await baseAPI.patch('/books',data)
    return response
}

export const deleteBook = async(id) =>{
    const response = await baseAPI.delete(`/books/${id}`)
    return response
}