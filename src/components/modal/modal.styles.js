import styled, { css } from "styled-components";
import { GrClose } from "react-icons/gr";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  width: 48.9375rem;
  min-height: 37.5rem;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
   width: 100%;
  }
  
`;
export const ContainerHeader = styled.div`
  width: 100%;
  background: rgba(229, 61, 0, 0.15);
  height: 5rem;
  border-radius: 0.625rem 0.625rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
  p{
    flex: 1;
    margin-left: 1rem;
  }
`;

export const Section = styled.section`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
`;

export const CardIcon = styled.div`
  background-color: #e53d00;
  border-radius: 0.625rem;
  padding: 0.2rem;
`;
export const CardContent = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
 
`;


export const IconClose = styled(GrClose)`
  margin-left: 1rem;
  font-size: 2rem;
  color: #000;
`;

