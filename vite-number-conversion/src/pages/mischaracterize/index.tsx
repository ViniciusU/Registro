
import {FormMischaracterize} from '../../components/FormMischaracterize';
import {Banner } from '../../components/Banner'
import { RegisterContainer} from "./styles";

export function Mischaracterize(){
    const up = false
  

    return(
        <>
        <Banner title='Descaracterizacao'/>

        <RegisterContainer>

        <FormMischaracterize update ={up}  endpoint='mischaracterize' />

        </RegisterContainer>
        
        </>

       

   

    )
}