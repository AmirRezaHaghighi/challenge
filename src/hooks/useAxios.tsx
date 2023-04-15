import axios, { AxiosInstance } from 'axios';
import {PaginationDTO,User,UserInfo,Userdetail} from "../types/userTypes"

const instance: AxiosInstance = axios.create({
  baseURL: 'https://reqres.in/api',
//   timeout: 10000, // set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers=async(pageNumber:number)=>{
    return await instance.get<PaginationDTO<User>>(`/users?page=${pageNumber}`).then((res) => res.data);}

export const getUser=async (userId:string | undefined)=>{
    if (!userId) {
        return null; 
    }
    return await instance.get<Userdetail>(`/users/${userId}`).then((res) => res.data.data);
  }

export const userLogin=async(userData:UserInfo) => {
    const { data: response } = await instance.post('/login', userData);
    return response.token;
}    
