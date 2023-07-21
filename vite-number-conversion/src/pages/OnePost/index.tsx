import React, { InputHTMLAttributes, useState } from "react";
import { Title,Container,Content,Meta,Author,Category, ContanteContainer, ImageContainer, Image, ImageWithDownload,DownloadButton} from "./styles";
import { FiEdit} from 'react-icons/fi';

import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import { api } from "../../services/api";

export function OnePost() {
  //const [open, setOpen] = useState(false);
  

  const [image, setImage] = useState({
    id: "",
    serial: "",
    description: "",
    batch: "",
    fileName: "",
    mischaracterize:[{
      destination: "",
      resourcesComplement:"",
      state:"",
      long:"",
      lat:""
    }]
  });
  const { id } = useParams();
  React.useEffect(() => {
    api.get("getPosts/" + id).then((res) => {
      setImage(res.data);
    });
  }, []);

  const handleDownload = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Imagem';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
<ContanteContainer>


    <Container>
    <Title>Equipamento selecionado</Title>
    <Meta>
      <Author>Serial: {image.serial}</Author>
      <Category>Lote: {image.batch}</Category>
    </Meta>
    <Content>
      {image.description}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam laboriosam esse enim maiores laborum perspiciatis voluptatibus quis, eaque ratione, ipsam eum obcaecati ducimus sequi. Deleniti vel obcaecati ducimus voluptatibus.
    </Content>
      <ImageContainer>
      <Image src={`data:;base64,${image.fileName}`}/>
      <ImageWithDownload>
      <QRCode value={"https://localhost:3000/Posts/" + id} size = {200}></QRCode>
          <DownloadButton onClick={() => handleDownload(`data:image/png;base64,${(document.getElementsByTagName("canvas")[0] as HTMLCanvasElement).toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream')}`)}>
            Baixar QR code
          </DownloadButton>
        </ImageWithDownload>

       
      </ImageContainer>


  </Container>

  
  <Container>
    <Title>Descaracterização do Equipamento</Title>
    <Meta>
      <Author>Serial: {image.serial}</Author>
      <Category>Lote: {image.batch}</Category>
    </Meta>
    <Content>
    {image.mischaracterize.length>0?<><p>Destinação: { image.mischaracterize[0].destination}</p>  <p>Local de utilização: {"Latitude: "+ image.mischaracterize[0].lat +" Longitude: "+  image.mischaracterize[0].long}</p>
          <p>Estado: { image.mischaracterize[0].state}</p> 
          <p>Recursos complementares: { image.mischaracterize[0].resourcesComplement}</p></>: <a href={"mischaracterize\\" + id}><FiEdit></FiEdit>Descaracterização</a>}
    </Content>
      <ImageContainer>
      <Image src={`data:;base64,${image.fileName}`}/>
       
      </ImageContainer>


  </Container>

    
  </ContanteContainer>
  );
}
