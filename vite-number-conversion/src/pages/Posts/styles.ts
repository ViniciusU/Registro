import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 3% 0 0 5%;
 
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width:1200px;
  margin:auto;
  background:white;
 
`;

export const Banner = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  background: #f5f5f5;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h3{
    font-family:"poppins";
    font-weight:100;
    font-size:40px;

  }


  

`;


export const ContentCard = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80%;
  margin-bottom: 2.4rem;
`;

export const NewsContainer = styled.div`
  display: grid;
  width: 80%;
  padding:2rem 0;
  margin:auto;
  grid-gap: 1.4rem;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
`;

export const Card = styled.section`
  margin: 0;
  padding: 4rem;
  width: 100%;
  min-height:400px;
  display: flex;
  align-items:center;
  justify-content:center;
  background: white;
  border: 1px solid;
  border-color: #DEE0E3;


  article{
    header{
      p{
        display: flex;
        align-items: center;
        justify-content: center;
      }

      h2{
        margin-top:0.75rem;
    color: #212931;
    font-size: 1.75rem;
    transition: hover 0.2s ease-out;
    font-family: "Source Sans Pro", Helvetica, sans-serif;

    &:hover{
    color:#18bfef;
    }
  }

    }
    a{
      display:flex;
      align-items:center;
      justify-content: center;
    }
    a img {
     margin:2rem 0;

      max-width:40%;
			-moz-transition: -moz-transform 0.2s ease-out;
			-webkit-transition: -webkit-transform 0.2s ease-out;
			-ms-transition: -ms-transform 0.2s ease-out;
			transition: transform 0.2s ease-out;
		}

		a img:hover{
			-moz-transform: scale(1.05);
			-webkit-transform: scale(1.05);
			-ms-transform: scale(1.05);
			transform: scale(1.05);
		}
    ul{
      margin-top:1rem;
      li{
        border: 2px solid;
  border-color: #DEE0E3;
  a{
    text-decoration:none;
  }

  &:hover{
    border: none;
  }

      }



    }
  }

 


`;


export const InfoContent = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0 px 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
  grid-area: info;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem;
  background: white;
  width: 100%;

  h4 {
    border-radius: 0.25rem;
    background: white;
    margin-bottom: 0.5rem;
    font-weight: 400;
    word-wrap: break-word;
    width: 100%;
    font-size: 0.8rem;
  }
  p {
    font-weight: 300;
    text-align: justify;
    word-break: normal;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 100%;
    hyphens: auto;
    font-size: 0.8rem;
  }
`;

export const ImgContent = styled.div`
  grid-area: image;
  padding-top: 1rem;
  padding: 0;
  margin: 0;
  background:rgba(10, 235, 175,0.1);
  max-width: 25rem;
	margin-left: auto;
	margin-right: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  img {
  
    max-width:40%;
   
  }
`;
