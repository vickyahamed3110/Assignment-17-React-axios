import axios from "axios";
 const api = "https://65e294efa8583365b318456a.mockapi.io/axios"
 const instance = axios.create({
   baseURL:api,
   timeout:10000,
   headers:{"X-Custom-Header":"foobar",
    student:"Vignesh",
    batch:"Tamil-Combined",
   } 
 })


const getAllUsers = async () => {
    const response = await instance.get('/')
    return response.data
}

const createUserData = async (userData) => {
    const response = await instance .post('/', userData)
    return response.data
}

const getSingleData = async (id) => {
    const response = await instance.get(`${id}`)
    return response.data
}

const deleteUser = async (id) => {
    const response = await instance.delete(`${id}`)
    return response.data
}

const editUser = async (userData, id) => {
    const response = await instance.put(`/${id}`, userData)
    return response.data
}

export{getAllUsers, createUserData, getSingleData, deleteUser, editUser}