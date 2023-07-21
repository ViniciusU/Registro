import React, { useState } from "react";
import { useNavigate, Outlet} from "react-router-dom";
import {

  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended
} from "./styles";
import LogoImg from "../../assets/WhiteLogo.svg";


export function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const navigate= useNavigate();
  return (

<NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Início</NavbarLink> 
            <NavbarLink to="/Form">Cadastrar Equipamento</NavbarLink>
            <NavbarLink to="/Posts">Equipamentos</NavbarLink>
            <NavbarLink to="/Category/register">Cadastrar Categoria</NavbarLink>
            <Outlet/>
          
         


            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo> <span>ORDEP</span>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
        
          <NavbarLinkExtended to="/" onClick={() => {setExtendNavbar(false);}}> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/Form"  onClick={() => {setExtendNavbar(false);}}> Form</NavbarLinkExtended>
          <NavbarLinkExtended to="/Posts"  onClick={() => {setExtendNavbar(false);}}> Posts</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"  onClick={() => {setExtendNavbar(false);}}> About Us</NavbarLinkExtended>
          <NavbarLinkExtended to="/Category/register"  onClick={() => {setExtendNavbar(false);}}> /Category/register</NavbarLinkExtended>


         
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>


  );
}