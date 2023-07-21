import React, {createContext, useState, useEffect} from "react"
import { api } from "../../services/api";
import { IContext, IAuthProvider, IUser} from "./types"
import { getUserLocalStorage, LoginRequest, setUseLocalStorage } from "./util"

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) =>{
    const [user, setUser] = useState<IUser |null>();

    useEffect(()=>{
        const user = getUserLocalStorage()
        console.log(user)

        if (user){
            setUser(user);
            setUseLocalStorage(user)
        }

    }, [])

    async function authenticate(email:string, password: string) {
        const response = await LoginRequest(email, password);
        const payload = {token: response.token, email}
   /*
        , {
            headers: {
                'Authorization': `Basic ${payload.token}`
            }})
        
        */
        setUser(payload);
        setUseLocalStorage(payload);
    }

    function logout (){
        setUser(null)
        setUseLocalStorage(null)
    }

    return(
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}