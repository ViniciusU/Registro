import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import {api} from '../../services/api'
import axios from "axios";
import Dropzone from '../Dropzone';
import { FormContent} from './styles';
import { useAuth } from '../../context/AuthProvider/useAuth';

interface FormRegisterProps  {

  endpoint:string;

}



export const FormRegister= (props:FormRegisterProps ) => {
 const auth = useAuth();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
 
});

const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
  //console.log(event.target.name, event.target.value);
  const { name, value } = event.target;
  setFormData({...formData, [name]: value });
}, [formData]);



  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();
    const {email, senha} = formData;
    const data = new FormData();
    data.append('email', email);
    data.append('senha', senha);

    auth.authenticate(email,senha).then(() => {

        navigate('/posts');
      });




  
}, [formData, navigate]);


    return (
       
      <form onSubmit={handleSubmit} >
   
  
      
        <input type="text" onChange={handleInputChange} placeholder="email" name ="email" required/>
        <input type="password" onChange={handleInputChange} placeholder="senha" name ="senha" required/>

  
    
      
        <button type="submit">Enviar</button>
       

    
      </form>

       
  
    )}

