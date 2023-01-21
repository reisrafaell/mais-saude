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
  width: 25px;
  height: 25px;
  position: relative;
  bottom: 2.1875rem;
  right: 6rem;
`;
export const Label = styled.p`
  color: rgba(229, 61, 0, 1);
  font-size: 15px;
  width: 70%;
  margin-bottom: 7px;
`;

export const Input = styled.input`
  background-color: rgba(229, 61, 0, 0.15);
  color: #000;
  width: 80%;
  border-radius: 0.5rem;
  height: 50px;
  padding: 10px 10px 10px 45px;
  letter-spacing: 1px;
  border: ${props=> props.showError ? "1px solid #c60d00" : "0"} ;
`;
export const Button = styled.button`
 background-color: transparent;
`;
