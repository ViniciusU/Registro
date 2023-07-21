import React, { InputHTMLAttributes, useState} from 'react';
import { boolean } from 'yup';
import { RegisterContainer} from "./styles";
import {FormRegister} from "../../components/FormLogin"
import { useParams } from 'react-router-dom';



export function FormLogin() {

  const [update, setUpdtae] = useState(false);
  const {id} = useParams();
  const endpoint = "update/" + id;


  return (
    
     <RegisterContainer >
      <h4>Login</h4>
        <FormRegister endpoint={endpoint}></FormRegister>
      </RegisterContainer>
  
    
      )


}