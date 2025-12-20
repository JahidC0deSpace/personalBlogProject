import axios from 'axios';
export const API_BASE_URL = 'http://localhost:8000';

const instance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
})

export const get = (url,params)=>{
    return instance.get(url,{params});
}

export const post = (url,data)=>{
    return instance.post(url,data);
}

export const patch = (url,data)=>{

    return instance.patch(url,data);
}

export const del = (url)=>{
    return instance.delete(url);
}