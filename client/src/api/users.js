import { axiosInstance } from ".";

export const LoginUser = async (value) => {
  try{
    const response = await axiosInstance.post('/user/login' , value);
    return response.data;
  }catch(err){
    console.log(err);
  }
}