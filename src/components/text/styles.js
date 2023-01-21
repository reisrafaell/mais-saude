import styled from "styled-components";

export const TextComponent = styled.p`
  font-size: ${(props) => props.fontSize || "1rem"};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color || "#000"};
  font-weight: ${(props) => props.fontWeight};
`;
