
import { useAuth } from "../../context/AuthProvider/useAuth"

import {Outlet, Navigate} from "react-router-dom";

export const ProtectedLayout = ( ) =>{

    const auth = useAuth();
  
    return auth.token? <Outlet/>: <Navigate to="/Login"/>
}