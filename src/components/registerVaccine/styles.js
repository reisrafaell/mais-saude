import styled from "styled-components";


export const Container = styled.div`

`

export const ContainerVaccine = styled.div`
  height: 21rem; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);;
  border-radius: 0.75rem;
  margin-top: 1.75rem;
  align-items: center;
  padding: 1.5rem;

  > div {
    width: 100%
  }

   @media (max-width: 768px){
     width: 100%;
     
     height: 22.8125rem;
   }
`