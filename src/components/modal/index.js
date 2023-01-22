import * as S from "./modal.styles";
import Text from "../text";
import Image from "../image";
import imageVacina from "../../assets/vacina.png";

const Modal = ({ children, title }) => {
  const closeModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  };
  return (
    <S.Section  id="modal">
      <S.Container>
        <S.ContainerHeader>
          <S.CardIcon>
            <Image img={imageVacina} width="3rem"></Image>
          </S.CardIcon>
          <Text fontSize="1.4rem" fontWeight="bold">
            {title}
          </Text>
          <S.IconClose onClick={closeModal} />
        </S.ContainerHeader>
        <S.CardContent>
        {children}
        </S.CardContent>
      </S.Container>
    </S.Section>
  );
};

export default Modal;
