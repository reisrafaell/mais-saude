import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > img {
    margin: 0 0 10rem 2rem;
    @media (max-width: 1200px) {
        margin: 1rem 0;
        width: 15rem;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const ContainerCenter = styled.form`
  min-width: 20.875rem;
  background-color: rgba(155, 155, 155, 0.4);
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 0;
  
`;
export const ContainerImage = styled.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 1200px) {
    display: none;
  }
`;
