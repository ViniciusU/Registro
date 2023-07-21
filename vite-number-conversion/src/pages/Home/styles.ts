import styled from  "styled-components"


export const ContentContainer = styled.main`

  
    margin: 0 auto;
    padding: 4rem 2rem;
    gap:6rem;  
    width: 100%;
  
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background:white;
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    color: white;
    font-weight: 900;
		letter-spacing: 0.075em;
		list-style: none;
		margin-bottom: 0;
		padding-left: 0;
		text-transform: uppercase;
    height: 100vh;
  
  
  section{
    max-width: 600px;

    > span{
      font-size: 1.5rem;
      font-weight: 400;
    }
    h1{
      font-size: 3rem;
      line-height: 3.8rem;
      font-weight: 300;
      margin-top: 2.5rem;
      font-weight:bold;
      color: #1e252d;
      &:hover{
        color: #18bfef !important;
      }
  
      span{
        color: #1e252d;
      
      }
    }
    p{
      font-size: 1.5rem;
      line-height: 2.25rem;
      margin-top: 1.5rem;
      color: white;
      color: #1e252d;
      &:hover{
        color: #18bfef !important;
      }
  
      
      span{
      color: white;
      font-weight: 100;
      color: #1e252d;
      &:hover{
        color: #18bfef !important;
      }
  
      }
    }
    button{
      margin-top: 2.5rem;
    }
    
  }

  img{
    width: 30rem;
    


  }
  
  `