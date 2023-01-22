import styled from "styled-components";


export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: flex-end;
justify-content:  space-evenly;

  > div {
    margin-bottom: 10%;
    display: flex;
    flex-direction: column;
    align-items: center

  }

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      margin-bottom: 45%;

      > img {
      width: 70%;
     }

    }

    > img {
      width: 42%;
      position: absolute;
      bottom: 0;
      right: 6%;
    }
    }
`

export const ContainerVaccine = styled.div`
  width: 37.5rem;
  height: 21rem; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fafafa;
  border-radius: 0.75rem;
  margin-top: 1.75rem;
  align-items: center;
  padding: 1.5rem;

  > div {
    width: 100%
  }

   @media (max-width: 1200px){
     width: 17.5rem;
     height: 22.8125rem;
   }
`