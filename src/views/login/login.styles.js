import styled from "styled-components";


export const Container = styled.div`

width: 1440px;
height: 100vh;
display: flex;
align-items: flex-end;
justify-content: space-around;

  > div {
    margin-bottom: 10%;
    display: flex;
    flex-direction: column;
    align-items: center
  }
`

export const ContainerLogin = styled.div`
  width: 21.5rem;
  height: 21.8125rem;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(155, 155, 155, 0.4);
  border-radius: 0.75rem;
  margin-top: 28px;
`