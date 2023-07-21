import React, { useCallback, useState } from "react";
import { api } from "../../services/api";
import {
  NewsContainer,
  Card,
  ImgContent,
  InfoContent,
  Content,
  ContentCard,
  Banner
} from "./styles";

import LogoImg from "../../assets/tLogo.svg";

export function Posts() {
  const [image, setImage] = useState([
    {
      id:"",
      serial: "",
      description: "",
      model: "",
      batch: "",
      Imagens: "",
    },
  ]);
  React.useEffect(() => {
    api.get("getAllPosts").then((res) => {
      setImage(res.data);
    });
  }, []);

  const colors = {
    green: "#06600F",
    red: "#bd0b0b",
  };

  return (
<>

    <Content>
      <ContentCard>
      <div className="App">
      <NewsContainer >
        {image.map((data) => (

        < Card  className="posts">
        <article>
          <header>
            <p>April 24, 2017</p>
            <h2>Sed magna
            ipsum faucibus</h2>
          </header>
          <a href= {"Posts\\"+data.id} className="image fit">  <img src={`data:;base64,${data.Imagens}`} /></a>


          <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
          <ul className="actions special">
            <li><a href= {"Posts\\"+data.id} className="button">Full Story</a></li>
          </ul>
        </article>
        </ Card >
          
           
       
        ))}

        <div >

  
          


        </div>

      </NewsContainer>


    </div>
     
      </ContentCard>
    

    </Content>


    </>
  );
}
