import {axiosInstance} from './index';

export const registerUser = async (value) => {
    try{
    const response = await axiosInstance.post("/api/users/register" , value)
    return response.data;
    }catch(err){
        console.log(err);
    }
}

export const loginUser = async (value) => {
    try{
    const response = await axiosInstance.post("/api/users/login" , value)
    return response.data;
    }catch(err){
        console.log(err);
    }
}

export const getCurrentUser = async (value) => {
    try{
       const response = await axiosInstance.get("/api/users/get-current-user");
       return response.data;
    }catch(err){
        console.log(err);
    }
}
