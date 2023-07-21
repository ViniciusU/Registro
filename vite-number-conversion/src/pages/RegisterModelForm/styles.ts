import styled from  "styled-components"


export const RegisterContainer = styled.div`
 
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    width: 100vw;
    padding: 5rem;
    padding-top: 3rem;
    align-items:  center;
    font-family: 'Poppins', sans-serif;
  h3{
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }  
  h4{
    margin-top: 1rem;
    color: grey;
    font-size: 1.4rem;
  }
  `

export const FormContent = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top:1rem;
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

  
export const InputGrup = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


div{
  display: flex;
  flex-direction:column;
  label{
    margin-bottom:0.50rem;
    font-weight:400;
  }
}

`

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

