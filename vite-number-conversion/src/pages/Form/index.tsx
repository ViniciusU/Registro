import React, { InputHTMLAttributes, useState} from 'react';
import { boolean } from 'yup';
import {FormRegister} from '../../components/FormRegister';
import { RegisterContainer} from "./styles";
import {Banner} from "../../components/Banner"
 


export function Form() {
  //const [open, setOpen] = useState(false);
  const [update, setUpdtae] = useState(false)


  const imageChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      console.log(event.target.files);
    }
  };

  return (

    <>

         <RegisterContainer >
     
       <FormRegister update={update} endpoint='register'></FormRegister>
     </RegisterContainer>
    </>
    

  
    
      )


}