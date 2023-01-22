import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 4rem;
  margin: 0.4rem 0;
  
`;
export const Icon = styled.img`
  height: 25px;
  position: relative;
  bottom: 2.2rem;
  right: 8.125rem;
`;
export const Label = styled.label`
  color: rgba(229, 61, 0);
  font-size: 0.75rem;
  font-weight: bold;
  width: 100%;
  margin-bottom: 0.3rem;
`;

export const Input = styled.input`
  background: rgba(229, 61, 0, 0.15);
  color: #000;
  width: 100%;
  border-radius: 0.375rem;
  height: 2.5rem;
  padding: 0.7rem;
  letter-spacing: 0.0625rem;
  border: ${props=> props.showError ? "1px solid #c60d00" : "1px solid transparent"};

    &::placeholder {
      color: #454545;
      font-weight: semi-bold;
    }

    outline-width: 0;
    &[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    }
`;

export const Button = styled.div`
  background-color: transparent;
  border: none;

   svg {
    position: relative;
    z-index: 1;
    height: 1.3125rem;
    top: -1.875rem;
    right: ${props=> props.right};

}
`;

