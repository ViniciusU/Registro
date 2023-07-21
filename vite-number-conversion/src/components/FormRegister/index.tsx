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
import { FormContent, InputGrup} from "./styles";
import LogoImg from "../../assets/tLogo.svg";
import * as Select from '@radix-ui/react-select';
import { useAuth } from "../../context/AuthProvider/useAuth"

interface FormRegisterProps {
  update: Boolean;
  endpoint: string;
}


export const FormRegister = (props: FormRegisterProps) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const navigate = useNavigate();
  const auth = useAuth();
  const [cotegorys, setCategorys] =  useState([{
    id:"",
    type:"",
    model:""
  }]);
 
  const [formData, setFormData] = useState({
    serial: "",
    description: "",
    model: "",
    batch: "",
  });

  React.useEffect(() => {
    api.get("category").then((res) => {
      setCategorys(res.data);
      console.log(res.data)
    });
  }, []);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.name, event.target.value);
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
      const { serial, description, model, batch } = formData;


      const data = new FormData();
      data.append("serial", serial);
      data.append("description", description);
      data.append("model_id", model);
      data.append("batch", batch);
      if (selectedFile) {
        data.append("image", selectedFile);
      }

   


      

      if (!props.update) {
        await api.post(props.endpoint, data, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Content-Transfer-Encoding": "base64",
            'Authorization': `Basic ${auth.token}`
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
    <>
   
    <FormContent onSubmit={handleSubmit} encType="multipart/form-data">

      <Dropzone onFileUploaded={setSelectedFile} />
      <div className="fields">
  <div className="field">
  <label htmlFor="">Número de serial</label>
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Número de serial"
            name="serial"
            required
          />
  </div>
  <div className="field">
  <label htmlFor="">Número de Lote</label>
          <input
             type="text"
            onChange={handleInputChange}
            placeholder="Número de Lote"
            name="batch"
            required
          />
  </div>
  <div className="field">
  <label htmlFor="">Descrição </label>
          <input
             type="text" onChange={handleInputChange}
            placeholder="Descrição "
            name="description"
            required
          />
  </div>

  <div className="field">
  <label htmlFor="">Modelo </label>
        <select name="model" onChange={handleSelectChange}>
          {
            cotegorys.map((category, index)=>{
              return(
                <option key ={index} value={category.id}>{category.model}</option>
              )
            })
          }
    
        </select>
      
        </div>
</div>
<ul className="actions">
									<li><input className="button" type="submit" value="Enviar" /></li>
								</ul>

      




    
    </FormContent>


</>



  );
};

/*

  <FormContent onSubmit={handleSubmit( (data  => onFinish(data)))}>
        <input placeholder="Número de serial"{...register("serial")}/>
        <input placeholder="Descrição "{...register("description")}/>
        <input placeholder="Destinação"{...register("destination")}/>
        <input placeholder="Número de Lote"{...register("batch")}/>
        <label>
        <p>{selectedImage?selectedImage:"exemplo.png"} <AiOutlineUpload/></p>
        <input name="print" accept="image/*" type= "file" placeholder="exemplo.png" required onChange={imageChange}/>
        </label>

        <button type="submit">Enviar</button>
 </FormContent>


   <FormContent onSubmit={(e  => handleFormSubmit(e))} encytpe="ENCTYPE_HERE">
        <input placeholder="Número de serial" name ="serial"/>
        <input placeholder="Descrição " name ="description"/>
        <input placeholder="Destinação" name ="destination"/>
        <input placeholder="Número de Lote" name ="batch"/>
        <label>
        <p>{selectedImage?selectedImage:"exemplo.png"} <AiOutlineUpload/></p>
        <input name="print" accept="image/*" type= "file" placeholder="exemplo.png" required onChange={imageChange}/>
        </label>

        <button type="submit">Enviar</button>
      </FormContent>


          const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // prevent the page from reloading
        e.preventDefault();
        // construct form data
        e.currentTarget.files()
        console.log(e.currentTarget.files());
        // make a POST request with Axios
       /*
        const res = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

         console.log(res);



      

  const imageChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const nameImg = event.target.files[0].name
      //console.log(event.target.files);
      setSelectedImage(nameImg);
  
    }
  };
       */
