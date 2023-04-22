import React from "react";
import {
  Button,
  Description,
  HeroContainer,
  Image,
  LeftContainer,
  Overlay,
  RightContainer,
  SubImage,
  Title,
} from "./HeroStyle";
import taxi1 from '../../Assets/Images/taxi1.jpg'
import taxi2 from '../../Assets/Images/taxi2.jpg'

const Hero = () => {
  return (
    <HeroContainer>
      <LeftContainer>
        <Title>
          Need a taxi ? <br />
          Book here
        </Title>
        <Description>
          We provide taxi booking services at most affordable prices. <br /> We
          will drop you at your destination safely and on time.
        </Description>
        <Button to='/booking'>Book Taxi</Button>
      </LeftContainer>
      <RightContainer>
        <Image src={taxi2}/>
        <Overlay>
            <SubImage src={taxi1}/>
        </Overlay>
      </RightContainer>
    </HeroContainer>
  );
};

export default Hero;
