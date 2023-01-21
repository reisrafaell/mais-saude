import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90px;
  
`;
export const Icon = styled.img`
  height: 25px;
  position: relative;
  bottom: 38px;
  right: 114px;
`;
export const Label = styled.label`
  color: #fff;
  font-size: 0.9375rem;
  width: 70%;
  margin-bottom: 0.4375rem;
`;

export const Input = styled.input`
  background: rgba(229, 61, 0, 0.15);
  color: #000;
  width: 80%;
  border-radius: 0.375rem;
  height: 3.3175rem;
  padding: 0.625rem 0.625rem 0.625rem 2.8125rem;
  letter-spacing: 0.0625rem;
  border: ${props=> props.showError ? "1px solid #c60d00" : "1px solid transparent"} ;
`;
export const Button = styled.button`
`;
