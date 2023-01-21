import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  `;

export const Img = styled.img`
object-fit: contain;
width: ${props=> props.width};
`;
