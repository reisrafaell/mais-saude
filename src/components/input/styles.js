import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  
`;
export const Icon = styled.img`
  width: 25px;
  height: 25px;
  position: relative;
  bottom: 38px;
  right: 133px;
`;
export const Label = styled.p`
  color: #fff;
  font-size: 15px;
  width: 70%;
  margin-bottom: 7px;
`;

export const Input = styled.input`
  background-color: #fff;
  color: #000;
  width: 80%;
  border-radius: 20px;
  height: 50px;
  padding: 10px 10px 10px 45px;
  letter-spacing: 1px;
  border: ${props=> props.showError ? "1px solid #c60d00" : "1px solid #fff"} ;
`;
export const Button = styled.button`
 
`;
