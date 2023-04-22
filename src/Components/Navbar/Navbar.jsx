import React, { useState } from "react";
import {
  Logo,
  LogoContainer,
  LogoText,
  NavbarContainer,
  LinksContainer,
  Link,
  NavbarWrapper,
  Hamburger,
} from "./NavbarStyle";
import LogoImg from "../../Assets/Images/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const setIsOpenFunc = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <LogoContainer to='/'>
          <Logo src={LogoImg} alt="logo" />
          <LogoText>Logo</LogoText>
        </LogoContainer>
        <LinksContainer isOpen={isOpen}>
          <Link to="/" onClick={setIsOpenFunc}>Home</Link>
          <Link to="/about" onClick={setIsOpenFunc}>About</Link>
          <Link to="/booking" onClick={setIsOpenFunc}>Booking</Link>
        </LinksContainer>
        <Hamburger onClick={setIsOpenFunc}>{isOpen?<VscClose/>:<BiMenuAltRight/>}</Hamburger>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
