import * as S from "./card.styles";
import { useState } from "react";
import password from "../../assets/password.png";
import email from "../../assets/email.png";
import Text from "../text";
import Image from "../image";
import imageVacina from "../../assets/vacina.png";

const Card = ({
  background,
  variant,
  onClick,
  vaccine,
  id
}) => {

  return variant === "card1" ? (
    <S.Container id={id}background={background} variant={variant} onClick={onClick}>
      <S.CardIcon>
        <Image img={imageVacina} width="3rem"></Image>
      </S.CardIcon>
      <S.CardLeft>
      <Text fontSize='1.2rem' fontWeight='bold'>{vaccine}</Text>
      </S.CardLeft>
      <S.CardCenter>
      <Text fontSize='0.875rem' fontWeight='bold'>Não Informado</Text>
      <S.IconOpen/>
      </S.CardCenter>
    </S.Container>
  ) : variant === "card2" ? (
    <S.Container id={id} background={background} variant={variant} onClick={onClick}>
       <S.CardIcon>
        <Image img={imageVacina} width="3rem"></Image>
      </S.CardIcon>
      <S.CardLeft>
      <Text fontSize='1.2rem' fontWeight='bold'>{vaccine}</Text>
      </S.CardLeft>
      <S.CardCenter>
      <Text fontSize='0.875rem' fontWeight='bold'>Em dia</Text>
      <S.IconOpen/>
      </S.CardCenter>
    </S.Container>
  ) : (
    <S.Container id={id} background={background} variant={variant} onClick={onClick}>
    <S.CardIcon>
        <Image img={imageVacina} width="3rem"></Image>
      </S.CardIcon>
      <S.CardLeft>
      <Text fontSize='1.2rem' fontWeight='bold'>{vaccine}</Text>
      </S.CardLeft>
      <S.CardCenter>
      <Text fontSize='0.875rem' fontWeight='bold'>Em Atraso</Text>
      <S.IconClose/>
      </S.CardCenter>
    </S.Container>
  );
};

export default Card;
