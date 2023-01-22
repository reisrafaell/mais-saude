import styled, { css } from "styled-components";

export const Section = styled.section`
  display: ${props=> props.active ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;
