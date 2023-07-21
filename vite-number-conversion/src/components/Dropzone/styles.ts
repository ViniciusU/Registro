import styled from "styled-components";





export const DropzoneDiv = styled.div`

height: 300px;
width:100%;
  background: transparent;
  border-radius: 10px;
  font-family: 'Source Sans Pro', sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  outline: 0;


img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p {
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  border-radius: 10px;
  border: 1px dashed #79ab7f;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;
  font-weight:300;

  svg {
  color: #79ab7f;
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
}
}



`