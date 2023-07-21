import React, {
  InputHTMLAttributes,
  useCallback,
  useState,
  FormEvent,
} from "react";
import { boolean } from "yup";
import { FormRegister } from "../../components/FormRegister";
import {
  RegisterContainer,
  FormContent,
  InputGrup,
  FooterForm,
  Banner
} from "./styles";
import LogoImg from "../../assets/tLogo.svg";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function RegisterModelForm() {
  const [update, setUpdtae] = useState(false);
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      await api.post(
        "/register/category",
        { type, model }
      );

      alert("Estabelecimento cadastrado com sucesso!");
      navigate("/Posts");
    },
    [navigate]
  );

  return (
    <>

    <Banner>
        <h3>
            Cadastar tipo de equipamento
        </h3>
    </Banner>
   
    <RegisterContainer>


      <FormContent onSubmit={handleSubmit}>
        <img src={LogoImg}></img>

        <InputGrup>
          <div>
            <label htmlFor="">Tipo do equipamento:</label>
            <input
              placeholder="Ex:TV BOX"
              name="type"
              required
              onChange={(event) => setType(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Modelo do Equipamento:</label>
            <input
              placeholder="Ex:MXQ PRO"
              name="model"
              required
              onChange={(event) => setModel(event.target.value)}
            />
          </div>
        </InputGrup>

        <FooterForm>
          <button type="submit">Enviar</button>
        </FooterForm>
      </FormContent>
    </RegisterContainer>

    </>
  );
}
