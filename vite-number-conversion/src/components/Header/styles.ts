import styled from "styled-components";
import { Link } from "react-router-dom";

interface  NavbarContainerProps {
  extendNavbar: boolean;
}




export const NavbarContainer = styled.nav<NavbarContainerProps>`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  display: flex;
  background: rgb(1,28,81);
  background: linear-gradient(90deg, rgba(1,28,81,1) 10%, rgba(1,81,19,1) 70%);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  font-family: 'Poppins', sans-serif;
  color:white;
  -moz-transition: -moz-transform 1s ease, opacity 1s ease;
	-webkit-transition: -webkit-transform 1s ease, opacity 1s ease;
	-ms-transition: -ms-transform 1s ease, opacity 1s ease;
	transition: transform 1s ease, opacity 1s ease;
	background-image: url("/overlay.png"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("/bg.jpg");
  flex-direction: column;
  
  @media (min-width: 700px) {
    height: 80px;
  }
`;
export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  color:white;
  padding-left: 5%;
  height:100%;
 


`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items:center;
  color:white;
  padding-right: 50px;
  height:100%;
  span{
    font-size:2rem;
    font-weight: bold;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height:100%;
  display: flex;
 
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  height: 100%;

`;

export const NavbarLink = styled(Link)`
   display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
  -moz-flex-shrink: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-shrink: 1;
  flex-shrink: 1;
  font-family: "Source Sans Pro", Helvetica, sans-serif;
  font-weight: 900;
  letter-spacing: 0.075em;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
  text-transform: uppercase;
  text-decoration:none;
  color:white;
  height:100%;


  display: flex;
  align-items:center;
  justify-content:center;
      font-size: 1rem;
      outline: none;
      padding: 0 2rem;

      &:hover{
    background-color: rgba(255, 255, 255, 0.1);

  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: black;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 60px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: black;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;



    