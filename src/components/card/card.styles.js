import styled, { css } from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HiOutlineXCircle } from "react-icons/hi";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  margin: 0.8rem 0;
  border-radius: 0.625rem;
  padding: 0.5rem;
  ${(props) => props.variant === "card1" && card1};
  ${(props) => props.variant === "card2" && card2};
  ${(props) => props.variant === "card3" && card3};

  @media (max-width: 1200px){
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: rem;

    

  }
`

export const CardCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardLeft = styled.div`
  display: flex;
  flex: 1;
  margin-left: 1rem;
`;


export const CardIcon = styled.div`
  background-color: #e53d00;
  border-radius: 0.625rem;
  padding: 0.2rem;
`;

const card1 = css`
  background-color: #fff;
  transition: 0.5s;
  &:hover {
    background: rgba(229, 61, 0, 0.15);
  }
`;
const card2 = css`
  background-color: #00e24d;
  transition: 0.5s;
  &:hover {
    background: #8fe0ab;
  }
  svg {
    color: #fff;
  }
`;
const card3 = css`
  background-color: #F57D7D;
  transition: 0.5s;
  &:hover {
    background: #FBBDBD;
  }
  svg {
    color: #fff;
  }


`;

export const IconOpen = styled(AiOutlineCheckCircle)`
  margin-left: 1rem;
  font-size: 2rem;
  color: red;
`;
export const IconClose = styled(HiOutlineXCircle)`
  margin-left: 1rem;
  font-size: 2rem;
  color: red;
`;
