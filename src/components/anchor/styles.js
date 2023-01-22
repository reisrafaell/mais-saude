import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

export const AnchorComponent = styled.a`
  font-size: ${(props) => props.fontSize || "1rem"};
  color: ${(props) => props.color || "#000"};
  
  text-decoration: none;
  &:hover {
    color: #000;
  }
`;
export const Container = styled.div`
  margin: ${(props) => props.margin};
  display: flex;
  align-items: center;
  width: ${(props) => props.width };
  gap: 0.2rem;
`;
export const Icon = styled(FaArrowLeft)`
  font-size: ${(props) => props.fontSize || "1rem"};
  color: ${(props) => props.color || "#000"};
  &:hover {
   color: rgba(229, 61, 0, 0.15);
  }
`;
