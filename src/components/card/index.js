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
}) => {

  return variant === "card1" ? (
    <S.Container background={background} variant={variant} onClick={onClick}>
      <S.CardIcon>
        <Image img={imageVacina} width="3rem"></Image>
      </S.CardIcon>
      <S.CardCenter>
      <Text fontSize='0.875rem' fontWeight='bold'>Não Informado</Text>
      <S.IconOpen/>
      </S.CardCenter>
    </S.Container>
  ) : variant === "card2" ? (
    <S.Container background={background} variant={variant} onClick={onClick}>
       <S.CardIcon>
        <Image img={imageVacina} width="3rem"></Image>
      </S.CardIcon>
      <S.CardCenter>
      <Text fontSize='0.875rem' fontWeight='bold'>Em dia</Text>
      <S.IconOpen/>
      </S.CardCenter>
    </S.Container>
  ) : (
    <S.Container background={background} variant={variant} onClick={onClick}>
    <S.CardIcon>
        <Image img={imageVacina} width="3rem"></Image>
      </S.CardIcon>
      <S.CardCenter>
      <Text fontSize='0.875rem' fontWeight='bold'>Em Atraso</Text>
      <S.IconOpen/>
      </S.CardCenter>
    </S.Container>
  );
};

export default Card;
