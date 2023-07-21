import styled from "styled-components";





export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  width: 50rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 1rem;

  font-weight: 600;
  color: grey;
  background: #70a1ff;
  

  input{
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    height: 3rem;
    padding: 1rem;
    width: 22rem;
    outline: none;
    color: grey;
    border: none;
  }

  
  textarea{
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    height: 3rem;
    width: 25rem;
    outline: none;
    color: grey;
    border: none;
  }

  
  input[type="file"]{


  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
  
  
  }

  label{
    background: red;
    color: black;
    border-radius: 0.25rem;
    height: 2rem;
    width: 27rem;
    display: flex;
    justify-content: center;
    align-items:center;
    background: white;
    margin: 0 0 1rem 0;

  p{
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 1rem;
    font-weight: 300;
  }
  }

  button{
    border: none;
    color: black;
    font-size: 1rem;
    background: #008080;
    width: 6rem;
    height: 2rem;
  }
  `