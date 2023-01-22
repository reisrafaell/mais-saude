import styled from "styled-components";


export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: flex-end;
justify-content:  space-evenly;

  > div {
    margin-bottom: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      margin-bottom: 55%;

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

export const ContainerLogin = styled.div`
  width: 21.5rem;
  height: 14.8125rem;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(155, 155, 155, 0.4);
  border-radius: 0.75rem;
  margin-top: 1.75rem;
  align-items: center;
  padding: 1rem 1.5rem;

    > div {
      width: 100%;
    }

    > p {
      width: 100%;
      flex: 1;
    }

   @media (max-width: 1200px){
     width: 17.5rem;
     height: 16.8125rem;
   }
`