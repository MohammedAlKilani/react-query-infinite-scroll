import axios from "axios"

const url = "https://jsonplaceholder.typicode.com"
const api = axios.create({
    baseURL:url
})
export const gitPosts = async (pageNumber:number=1,options:object={}) => {
   const response = await api.get(`/posts?_page=${pageNumber}`,options)
    return response.data
} 

