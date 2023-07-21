import { ContentContainer} from "./styles";
import LogoImg from "../../assets/logo.svg";


export  function Home() {

    return (
      <>
    
        <ContentContainer>
        <img src={LogoImg} alt="logo"/>
          <section>
            <span>👏 Oi, Bem vindo </span>
            <h1>Cadastro, gerenciamento e acompanhamento.</h1>
            <p>
            Plataforma de acompanhamento e gestão de equipamentos da receita federal <br/>
             
            </p>
           
          </section>
         
        </ContentContainer>
        
      </>
    )
  }