import { api } from "../../services/api";
import { IUser } from "./types";
import {v4 as uuid} from 'uuid'

export function setUseLocalStorage (user: IUser | null){
    localStorage.setItem("u", JSON.stringify(user))
}
export function getUserLocalStorage () {
    const json = localStorage.getItem("u");

    if(!json){
        return null;
    }
    const user = JSON.parse(json);

    return user ?? null;
}


export async function LoginRequest(email:string, password: string) {
    
    try {
        const request =   await api.post("/authenticate", {username:email,password})
        return request.data;
    } catch (error) {
        return null;
    }
    /*

    return({
        token:uuid(),
        user:{
            email:email,
            password:password
        }
    })

    */
    
}