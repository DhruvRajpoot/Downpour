import styled from "styled-components";

export const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 6vw;
  gap: 1rem;

  @media (max-width: 1000px) {
    padding: 0.5rem calc(1rem + 1vw);
  }
`;

export const BookingWrapper = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  flex: 1;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Heading = styled.h1`
  font-size: calc(1.3rem + 1vw);

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Description = styled.p``;
export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
  background-color: #ededed;
  font-size: 1.2rem;
`;
export const Label = styled.label``;

export const Input = styled.input`
  padding: 0.5rem;
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 4px;
  width: 100%;
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  position: absolute;
  bottom: -1rem;
`;

export const TextAreaContainer = styled(InputContainer)`
  grid-column: 1/3;
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  background-color: transparent;
  border-radius: 4px;
  border: none;
  outline: none;
  width: 100%;
  min-height: 6rem;
`;

export const Button = styled.button`
  padding: 0.5rem;
  font-size: 1.1rem;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: #ffcd00;
  cursor: pointer;

  &:active {
    transition: all 0.2s ease-in-out;
    transform: scale(0.95);
  }
`;
export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 80%;
  height: 100%;
  object-fit: contain;
`;
