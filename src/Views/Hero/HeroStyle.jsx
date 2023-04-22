import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100vw;
  min-height: calc(100vh - 5rem);
  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  gap: calc(2rem + 0.5vw);
  padding-left: 6vw;
  padding-right: 2rem;
`;

export const Title = styled.h1`
  font-size: calc(1.8rem + 1.2vw);
`;

export const Description = styled.p`
  font-size: calc(0.9rem + 0.2vw);
`;

export const Button = styled(Link)`
  text-decoration: none;
  color: black;
  width: 10rem;
  padding: 0.8rem 2rem;
  background: #ffcd00;
  font-size: calc(1rem + 0.1vw);
  font-weight: 800;
  letter-spacing: 1px;
  border: none;
  outline: none;
  position: relative;
  cursor: pointer;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border: 1px solid #ffcd00;
    z-index: -1;
    top: 6px;
    left: 6px;
  }

  &:hover {
    &::after {
      top: 0px;
      left: 0px;
      transition: all 0.3s ease;
    }
  }

  &:active {
    transition: all 0.3s ease;
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    position: unset;

    &::after {
      display: none;
    }
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 70%;
  height: 70%;
  object-fit: cover;
  transform: scaleX(-1);

  @media (max-width: 1000px) {
    width: 90%;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  background: #ffffff;
  padding: calc(1rem + 1vw);
  z-index: 2;
  top: 50%;
  left: 50%;

  @media (max-width: 1000px) {
    left: 30%;
    width: 70%;
  }
`;
export const SubImage = styled.img`
  width: 100%;
  height: 100%;
`;
