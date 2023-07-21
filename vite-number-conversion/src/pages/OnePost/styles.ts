

import styled from "styled-components";

export const ContanteContainer = styled.div`
    margin: 0 auto;
    padding: 4rem 2rem;
    gap:8rem;  max-width: 1120px;
  
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction:column;
    background:white;
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    font-weight: 900;
		letter-spacing: 0.075em;
		margin-bottom: 0;
		padding-left: 0;
  
  
`;

export const Container = styled.div`
  width:800px;
  margin: 0 auto;
  background:white;
`;

export  const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

export  const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export  const Author = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

export  const Category = styled.span`
  font-size: 16px;
  color: #666;
  text-transform: uppercase;
`;

export  const Content = styled.div`
  font-size: 18px;
  line-height: 1.5;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  gap: 40px;
  margin: 40px 0;

`;

export const Image = styled.img`
  max-width: 100%;
  margin: 0 10px;
`;


export const ImageWithDownload = styled.div`
  position: relative;
`;

export const DownloadButton = styled.button`
  position: absolute;
  bottom: -32px;
  left: 0px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;
