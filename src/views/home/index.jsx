import * as S from "./home.styles";
import { useNavigate } from "react-router-dom";
import Anchor from "../../components/anchor";
import Image from "../../components/image";
import imagePerson from "../../assets/person.png";
import imageLogo from "../../assets/logoBrand.png";
import Card from "../../components/card";

const Home = () => {
  const nav = useNavigate();

  return (
    <S.Container>
      <S.ContainerHeader>
          <Anchor
            icon={true}
            fontSize="1.5rem"
            href="/access"
            color={"#E53D00"}
            margin="0.5rem 0"
          >
            Voltar
          </Anchor>
          <Image img={imageLogo} width="22rem" />
        </S.ContainerHeader>
      <S.ContainerCenter>        
        Home
        <Card variant='card3'/>
      </S.ContainerCenter>
    </S.Container>
  );
};
export default Home;
