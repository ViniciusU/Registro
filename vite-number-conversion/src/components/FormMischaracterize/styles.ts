import styled from "styled-components";





export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  background: var(--green-700);
  color:white;
  max-width: 50rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 1rem;

  font-weight: 600;

  img{
    width: 100px;
  }
  

  

  input{
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    height: 3rem;
    padding: 1rem;
    width: 22rem;
    outline: none;
    color:black;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  select{
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    height: 3rem;
    padding: 1rem;
    width: 22rem;
    outline: none;
    color:black;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  }

  
  textarea{
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    height: 3rem;
    width: 25rem;
    outline: none;
    color:white;
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

  background:none;
  font-weight:500;
  color:white;



  }

 
  `

export const FooterForm = styled.div`

  width: 100%;

  button{
    border: none;
    color:white;
    font-size: 1rem;
    background: #678967;
    width: 6rem;
    height: 2rem;

  }
  button:hover{
 
    color: white;
   
    
  }

`

export const InputGp = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;


  padding: 1rem;
  margin-bottom:2rem;

  height: 3rem;
  gap:0.25rem;
  width: 22rem;




  
  input{
 
    border-radius: 0.5rem;
    margin-top:1rem;

    
   
    height: 1.5rem;
    padding: 1rem;
    width: 10rem;
    outline: none;
    color:black;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }



`

  
export const InputGrup = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
@media (max-width: 500px) {
   flex-direction:column;
  }



`