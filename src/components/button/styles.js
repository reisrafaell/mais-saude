import styled from "styled-components";

export const Button = styled.button`
  width: ${props=> props.width || '100%'};
  margin: ${props=> props.margin };
  height: ${props=> props.height || "3.0625rem" };
  border: 1px solid #E53D00;
  font-size: 1rem;
  font-weight: bold;
  background-color:  ${props=> props.background || 'transparent'};
  border-radius: 0.375rem;
  color: #E53D00;
  &:hover{
    background: rgba(229, 61, 0, 0.15);
  }
`;