import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100vw;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
`;

export const NavbarWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(NavLink)`
  text-decoration: none;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: black;
`;

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const LogoText = styled.h1`
  font-size: 1.8rem;
`;

export const LinksContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(5vw - 1rem);
  z-index: 1000;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 80vw;
    height: 100vh;
    flex-direction: column;
    background-color: #ffbf00f8;
    gap: 2rem;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: all 0.3s ease-in-out;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.7rem 2rem;
  color: black;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;

  &:hover {
    background: #dcdcdc;
  }

  &.active {
    background: #dcdcdc;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Hamburger = styled.button`
  display: none;
  border: none;
  background: transparent;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;