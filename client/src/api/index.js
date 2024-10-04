import axios from "axios";
const token = localStorage.getItem('token');


export const axiosInstance = axios.create({
    baseURL : "http://localhost:8082",
    headers : {
        "Content-Type" : "application/json",
    },
});

axiosInstance.interceptors.request.use(function (config){
    const token = localStorage.getItem('token');
    if(token){
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
},
function(error){
    return Promise.reject(error);
}
);


export default axiosInstance;