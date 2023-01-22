import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    #d6e6eb 0%,
    rgba(81, 180, 211, 0.86) 99.99%,
    rgba(249, 249, 249, 0.67) 100%
  );
  display: flex;

  input, textarea, select {
  font: inherit !important;
}
`;
