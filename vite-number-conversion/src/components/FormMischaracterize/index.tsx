import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import axios from "axios";
import Dropzone from "../Dropzone";
import { FormContent, InputGrup, FooterForm, InputGp } from "./styles";
import LogoImg from "../../assets/tLogo.svg";
import * as Select from "@radix-ui/react-select";
import { useParams } from 'react-router-dom';


interface FormRegisterProps {
  update: Boolean;
  endpoint: string;

}
const countries = { france: "🇫🇷", "united-kingdom": "🇬🇧", spain: "🇪🇸" };

export const FormMischaracterize = (props: FormRegisterProps) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const navigate = useNavigate();
  const {idParam} = useParams();



  const [formData, setFormData] = useState(  {
    equipment_id:"",
    destination:"",
    resourcesComplement:"",
    state:"",
    long:"",
    lat:"",
  });

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      //console.log(event.target.name, event.target.value);
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    },
    [formData]
  );

  const handleSelectChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      console.log(event.target.name, event.target.value);
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    },
    [formData]
  );

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
              const {    
                          destination,
                          resourcesComplement,
                          state,
                          long,
                          lat} = formData;
  

      const data = new FormData();
      
      idParam? data.append("equipment_id",idParam ):0;
      data.append("destination", destination);
      data.append("resourcesComplement", resourcesComplement);
      data.append("state", state);
      data.append("long", long);
      data.append("lat", lat);

      if (selectedFile) {
        data.append("image", selectedFile);
      }
      data.forEach(item=>{
        console.log(item)
      })
  

      
      if (!props.update) {
        await api.post(props.endpoint, data, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Content-Transfer-Encoding": "base64",
          },
        });
      } else {
        await api.put(props.endpoint, data, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Content-Transfer-Encoding": "base64",
          },
        });
      }

      alert("Estabelecimento cadastrado com sucesso!");

      navigate("/Posts");
    },
    [formData, navigate, selectedFile]
  );

  return (
    <FormContent onSubmit={handleSubmit} encType="multipart/form-data">
      <img src={LogoImg}></img>
      <Dropzone onFileUploaded={setSelectedFile} />
      <InputGrup>
        <div>
          <label htmlFor="">Destinação</label>
          <input
            onChange={handleInputChange}
            placeholder="Destinação"
            name="destination"
            required
          />
          <label htmlFor="">Recursos complementares </label>
          <input
            onChange={handleInputChange}
            placeholder="Recursos complementares "
            name="resourcesComplement"
            required
          />
        </div>
        <div>
          <label htmlFor="">Local de utilização </label>
          <InputGp>
            <input
              onChange={handleInputChange}
              placeholder="Latitude"
              name="lat"
              required
            />
            <input
              onChange={handleInputChange}
              placeholder="Longitude"
              name="long"
              required
            />
          </InputGp>

          <label htmlFor="">Estado</label>
          <select name="state" onChange={handleSelectChange}>
            <option value="estado">Selecione o Estado</option>
            <option value="ac">Acre</option>
            <option value="al">Alagoas</option>
            <option value="am">Amazonas</option>
            <option value="ap">Amapá</option>
            <option value="ba">Bahia</option>
            <option value="ce">Ceará</option>
            <option value="df">Distrito Federal</option>
            <option value="es">Espírito Santo</option>
            <option value="go">Goiás</option>
            <option value="ma">Maranhão</option>
            <option value="mt">Mato Grosso</option>
            <option value="ms">Mato Grosso do Sul</option>
            <option value="mg">Minas Gerais</option>
            <option value="pa">Pará</option>
            <option value="pb">Paraíba</option>
            <option value="pr">Paraná</option>
            <option value="pe">Pernambuco</option>
            <option value="pi">Piauí</option>
            <option value="rj">Rio de Janeiro</option>
            <option value="rn">Rio Grande do Norte</option>
            <option value="ro">Rondônia</option>
            <option value="rs">Rio Grande do Sul</option>
            <option value="rr">Roraima</option>
            <option value="sc">Santa Catarina</option>
            <option value="se">Sergipe</option>
            <option value="sp">São Paulo</option>
            <option value="to">Tocantins</option>
          </select>
        </div>
      </InputGrup>

      <FooterForm>
        <button type="submit">Enviar</button>
      </FooterForm>
    </FormContent>
  );
};
