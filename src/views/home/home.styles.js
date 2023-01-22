import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      font-size: 1.5rem;
      margin-left: 0.625rem;
    }

    svg {
      width: 1rem;
    }
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 2rem 0;
  padding: 0 3rem;

  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 2rem;
    > img {
      width: 45%;
      
    }
  }
`;
export const ContainerCenter = styled.div`
  width: 40.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    padding: 0 1rem;
    width: 100%;

    p {
      font-size: 1.2rem;
      width: 100%;
    }
  }
`;
