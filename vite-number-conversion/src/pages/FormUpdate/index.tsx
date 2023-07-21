import React, { InputHTMLAttributes} from 'react';
import {FormRegister} from '../../components/FormRegister';
import { RegisterContainer} from "./styles";
import {useParams, useNavigate} from 'react-router-dom';
import { api } from '../../services/api';

export function FormUpdate() {
  //const [open, setOpen] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();

   async function onChange() {

    await api.delete(`delete/${id}`);
    navigate('/Posts')
  
  } 

  const endpoint = "update/" + id;

  return (
    
     <RegisterContainer>
      <h4>Cadastrar Informação</h4>
        <FormRegister update={true} endpoint={endpoint}></FormRegister>

        <button onClick={onChange}>APAGAR</button>

      </RegisterContainer>
  
    
      )


}