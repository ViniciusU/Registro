import { Navigate} from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import {useForm} from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from 'react-router-dom';
import axios from "axios";

type FormData = {
  email: string;
  password: string;
};

export function FormLogin() {

    const auth = useAuth();
    
    const {authenticate} = useContext(AuthContext)
    const {register, handleSubmit, watch, formState:{errors}} = useForm<FormData>();

    


    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // prevent the page from reloading
        e.preventDefault();
       
        // construct form data
        const formData = new FormData(e.currentTarget);
        const files = e.currentTarget.files;
        for (let i = 0; i < files.length; i++) {
          formData.append('files', files[i]);
        }
    
        // make a POST request with Axios
        const res = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        console.log(res);
    };

 
    async function onFinish(values:{email:string, password:string}) {

       try {
       
        console.log(values)
        await authenticate(values.email,values.password);
        
    
       } catch (error) {
        console.log(error)
       }
        
    }

    return (
       
      <form onSubmit={handleSubmit( (data  => onFinish(data)))} encType='multipart/form-data'>
        <input {...register("email")}/>
        <input {...register("password")}/>
        <button type="submit">Enviar</button>

      </form>

       
  
    )}